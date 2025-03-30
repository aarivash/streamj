import sqlite3
import bcrypt
import os
from datetime import datetime

DB_PATH = "data/auth.db"
ACCESOS_DB_PATH = "data/usuarios.db"

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

def registrar_usuario(username, password, grupo=None, rol="user"):
    try:
        hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
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

    if row:
        return bcrypt.checkpw(password.encode('utf-8'), row[0])
    return False

def obtener_grupo_usuario(username):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT grupo FROM usuarios WHERE username = ?", (username,))
    row = c.fetchone()
    conn.close()
    return row[0] if row else None

def obtener_rol_usuario(username):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT rol FROM usuarios WHERE username = ?", (username,))
    row = c.fetchone()
    conn.close()
    return row[0] if row else "user"

def registrar_acceso(usuario):
    crear_tabla_accesos()
    conn = sqlite3.connect(ACCESOS_DB_PATH)
    cursor = conn.cursor()
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    cursor.execute("INSERT INTO accesos (usuario, timestamp) VALUES (?, ?)", (usuario, timestamp))
    conn.commit()
    conn.close()

def obtener_ultimos_accesos(usuario, limite=3):
    crear_tabla_accesos()
    conn = sqlite3.connect(ACCESOS_DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT timestamp FROM accesos WHERE usuario = ? ORDER BY timestamp DESC LIMIT ?", (usuario, limite))
    filas = cursor.fetchall()
    conn.close()
    return [f[0] for f in filas]

# Solo si se ejecuta directamente este archivo
if __name__ == "__main__":
    crear_tabla_usuarios()
    crear_tabla_accesos()
    print("✅ Tablas creadas/verificadas")