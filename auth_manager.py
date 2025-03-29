import sqlite3
import bcrypt

AUTH_DB_PATH = "data/auth.db"

def registrar_usuario(username, password, grupo):
    """Registra un nuevo usuario si no existe."""
    try:
        conn = sqlite3.connect(AUTH_DB_PATH)
        c = conn.cursor()

        # Verificar si el usuario ya existe
        c.execute("SELECT * FROM usuarios WHERE username = ?", (username,))
        if c.fetchone():
            return False, "❌ El usuario ya existe."

        # Encriptar la contraseña y guardar
        hashed_pw = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        c.execute("INSERT INTO usuarios (username, password, grupo) VALUES (?, ?, ?)", (username, hashed_pw, grupo))
        conn.commit()
        conn.close()
        return True, "✅ Usuario registrado exitosamente."

    except Exception as e:
        return False, f"⚠️ Error al registrar usuario: {str(e)}"

def verificar_credenciales(username, password):
    """Verifica usuario y contraseña."""
    try:
        conn = sqlite3.connect(AUTH_DB_PATH)
        c = conn.cursor()
        c.execute("SELECT password FROM usuarios WHERE username = ?", (username,))
        row = c.fetchone()
        conn.close()

        if row:
            hashed = row[0]
            return bcrypt.checkpw(password.encode('utf-8'), hashed)
        return False
    except Exception:
        return False

def obtener_grupo_usuario(username):
    """Devuelve el grupo al que pertenece el usuario."""
    conn = sqlite3.connect(AUTH_DB_PATH)
    c = conn.cursor()
    c.execute("SELECT grupo FROM usuarios WHERE username = ?", (username,))
    row = c.fetchone()
    conn.close()
    return row[0] if row else None
