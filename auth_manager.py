
# === AUTH MANAGER ===
# Gestión de usuarios: autenticación, registro, grupos y accesos

import sqlite3
import bcrypt
import os
from datetime import datetime

# 📁 Rutas de las bases de datos
DB_PATH = "data/auth.db"
ACCESOS_DB_PATH = "data/usuarios.db"

# =========================
# 🔐 USUARIOS Y ROLES
# =========================

def crear_tabla_usuarios():
    os.makedirs("data", exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            grupo TEXT,
            rol TEXT DEFAULT 'user'
        )
    """)
    conn.commit()
    conn.close()

def registrar_usuario(username, password, grupo=None, rol="user"):
    try:
        hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()

        if grupo:
            c.execute("SELECT nombre FROM grupos WHERE nombre = ?", (grupo,))
            if not c.fetchone():
                return False, f"❌ El grupo '{grupo}' no existe. Crea el grupo antes de asignarlo."

        c.execute("INSERT INTO usuarios (username, password, grupo, rol) VALUES (?, ?, ?, ?)",
                  (username, hashed_pw, grupo, rol))
        conn.commit()
        conn.close()
        return True, "✅ Usuario registrado con éxito"
    except sqlite3.IntegrityError:
        return False, "❌ El usuario ya existe"
    except Exception as e:
        return False, f"❌ Error: {e}"

def verificar_credenciales(username, password):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT password FROM usuarios WHERE username = ?", (username,))
    row = c.fetchone()
    conn.close()
    return bcrypt.checkpw(password.encode('utf-8'), row[0]) if row else False

def obtener_rol_usuario(username):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT rol FROM usuarios WHERE username = ?", (username,))
    row = c.fetchone()
    conn.close()
    return row[0] if row else "user"

def obtener_grupo_usuario(username):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT grupo FROM usuarios WHERE username = ?", (username,))
    row = c.fetchone()
    conn.close()
    return row[0] if row else None

def obtener_todos_los_usuarios():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT id, username, grupo, rol FROM usuarios")
    usuarios = c.fetchall()
    conn.close()
    return usuarios

def actualizar_rol_usuario(username, nuevo_rol):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("UPDATE usuarios SET rol = ? WHERE username = ?", (nuevo_rol, username))
    conn.commit()
    conn.close()
    return True

def eliminar_usuario(username):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("DELETE FROM usuarios WHERE username = ?", (username,))
    conn.commit()
    conn.close()

# =========================
# 👥 GRUPOS
# =========================

def crear_tabla_grupos():
    os.makedirs("data", exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS grupos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT UNIQUE NOT NULL
        )
    """)
    conn.commit()
    conn.close()

def crear_grupo(nombre_grupo):
    if not nombre_grupo:
        return False, "❌ Debes ingresar un nombre de grupo"

    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT id FROM grupos WHERE nombre = ?", (nombre_grupo,))
    if c.fetchone():
        conn.close()
        return False, "❌ El grupo ya existe"
    c.execute("INSERT INTO grupos (nombre) VALUES (?)", (nombre_grupo,))
    conn.commit()
    conn.close()
    return True, "✅ Grupo creado correctamente"

def obtener_grupos_existentes():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT nombre FROM grupos")
    grupos_tabla = [row[0] for row in c.fetchall()]

    c.execute("SELECT DISTINCT TRIM(grupo) FROM usuarios WHERE grupo IS NOT NULL AND TRIM(grupo) != ''")
    grupos_usuarios = [row[0] for row in c.fetchall() if row[0]]

    grupos = list(set(grupos_tabla + grupos_usuarios))
    conn.close()
    return sorted(grupos)

def renombrar_grupo(grupo_actual, nuevo_nombre):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("UPDATE grupos SET nombre = ? WHERE nombre = ?", (nuevo_nombre, grupo_actual))
    c.execute("UPDATE usuarios SET grupo = ? WHERE grupo = ?", (nuevo_nombre, grupo_actual))
    conn.commit()
    conn.close()
    return True

def eliminar_grupo(grupo):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT COUNT(*) FROM usuarios WHERE grupo = ?", (grupo,))
    count = c.fetchone()[0]
    if count > 0:
        conn.close()
        return False, "❌ No se puede eliminar un grupo con usuarios asignados."
    c.execute("DELETE FROM grupos WHERE nombre = ?", (grupo,))
    conn.commit()
    conn.close()
    return True, "✅ Grupo eliminado correctamente"

def obtener_resumen_grupos():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT grupo, COUNT(*) FROM usuarios WHERE grupo IS NOT NULL AND grupo != '' GROUP BY grupo")
    grupos_con_usuarios = dict(c.fetchall())

    c.execute("SELECT nombre FROM grupos")
    grupos_registrados = [row[0] for row in c.fetchall()]

    todos_los_grupos = set(list(grupos_con_usuarios.keys()) + grupos_registrados)
    resumen = [(g, grupos_con_usuarios.get(g, 0)) for g in todos_los_grupos]
    conn.close()
    return sorted(resumen)

# =========================
# ⏱️ ACCESOS
# =========================

def crear_tabla_accesos():
    os.makedirs("data", exist_ok=True)
    conn = sqlite3.connect(ACCESOS_DB_PATH)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS accesos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario TEXT,
            timestamp TEXT
        )
    """)
    conn.commit()
    conn.close()

def registrar_acceso(usuario):
    crear_tabla_accesos()
    conn = sqlite3.connect(ACCESOS_DB_PATH)
    c = conn.cursor()
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    c.execute("INSERT INTO accesos (usuario, timestamp) VALUES (?, ?)", (usuario, timestamp))
    conn.commit()
    conn.close()

def obtener_ultimos_accesos(usuario, limite=3):
    crear_tabla_accesos()
    conn = sqlite3.connect(ACCESOS_DB_PATH)
    c = conn.cursor()
    c.execute("""
        SELECT timestamp FROM accesos 
        WHERE usuario = ? 
        ORDER BY timestamp DESC 
        LIMIT ?
    """, (usuario, limite))
    accesos = c.fetchall()
    conn.close()
    return [a[0] for a in accesos]

# =========================
# ▶️ Ejecutar directamente
# =========================
if __name__ == "__main__":
    crear_tabla_usuarios()
    crear_tabla_accesos()
    crear_tabla_grupos()
    print("✅ Tablas creadas/verificadas")
