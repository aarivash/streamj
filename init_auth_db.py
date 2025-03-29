import sqlite3

AUTH_DB_PATH = "data/auth.db"

def crear_tabla_usuarios():
    conn = sqlite3.connect(AUTH_DB_PATH)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT,
            grupo TEXT
        )
    ''')
    conn.commit()
    conn.close()

if __name__ == "__main__":
    crear_tabla_usuarios()
    print("✅ Tabla de usuarios creada o verificada correctamente.")
