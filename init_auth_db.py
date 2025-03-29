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
