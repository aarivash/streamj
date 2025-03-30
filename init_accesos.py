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
