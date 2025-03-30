import sqlite3

AUTH_DB_PATH = "data/auth.db"

conn = sqlite3.connect(AUTH_DB_PATH)
c = conn.cursor()

# Crear tabla si no existe
c.execute("""
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    grupo TEXT,
    rol TEXT DEFAULT 'usuario'  -- futuro uso: 'admin', 'usuario', etc.
)
""")

conn.commit()
conn.close()

print("✅ Tabla de usuarios creada o verificada correctamente.")

# archivo: init_accesos.py
import sqlite3

# Conectarse a tu base de usuarios
conn = sqlite3.connect("data/usuarios.db")
cursor = conn.cursor()

# Crear tabla para guardar accesos si no existe
cursor.execute("""
CREATE TABLE IF NOT EXISTS accesos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    usuario TEXT,
    timestamp TEXT
)
""")

conn.commit()
conn.close()

print("✅ Tabla de accesos creada (si no existía).")