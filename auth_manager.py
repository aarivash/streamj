import sqlite3
import bcrypt
import os

DB_PATH = "data/auth.db"


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


# Solo si ejecutas este archivo directamente
if __name__ == "__main__":
    crear_tabla_usuarios()
    print("✅ Tabla de usuarios creada/verificada")
