import sqlite3
import threading
import time
import os

# Diccionario global en memoria para seguimiento de ejecuciones en tiempo real
ejecuciones_activas = {}

# ============================
# 🔧 GESTIÓN DE TABLAS
# ============================

def crear_tabla_ejecuciones():
    """Crea la tabla de ejecuciones si no existe."""
    os.makedirs("data", exist_ok=True)
    conn = sqlite3.connect("data/ejecuciones.db")
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS ejecuciones (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre_archivo TEXT,
            hilos INTEGER,
            ramp_up INTEGER,
            duracion INTEGER,
            comentario TEXT,
            usuario TEXT,
            timestamp TEXT,
            estado TEXT
        )
    """)
    conn.commit()
    conn.close()

# ============================
# 🟢 AGREGAR NUEVA EJECUCIÓN
# ============================

def agregar_ejecucion(nombre_archivo, hilos, ramp_up, duracion, comentario, usuario, timestamp=None):
    """
    Registra una nueva ejecución tanto en memoria como en base de datos.
    """
    fecha_actual = timestamp or time.strftime("%Y-%m-%d %H:%M:%S")

    ejecuciones_activas[nombre_archivo] = {
        "nombre_archivo": nombre_archivo,
        "hilos": hilos,
        "ramp_up": ramp_up,
        "duracion": duracion,
        "comentario": comentario,
        "usuario": usuario,
        "estado": "⏳ Ejecutando",
        "fecha": fecha_actual,
        "thread": threading.current_thread().name
    }

    crear_tabla_ejecuciones()
    conn = sqlite3.connect("data/ejecuciones.db")
    c = conn.cursor()
    c.execute("""
        INSERT INTO ejecuciones 
        (nombre_archivo, hilos, ramp_up, duracion, comentario, usuario, timestamp, estado)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (nombre_archivo, hilos, ramp_up, duracion, comentario, usuario, fecha_actual, "⏳ Ejecutando"))
    conn.commit()
    conn.close()

# ============================
# 🔄 ACTUALIZAR ESTADO
# ============================

def actualizar_estado(nombre_archivo, nuevo_estado):
    """
    Actualiza el estado de una ejecución en memoria y en base de datos.
    """
    if nombre_archivo in ejecuciones_activas:
        ejecuciones_activas[nombre_archivo]["estado"] = nuevo_estado

    conn = sqlite3.connect("data/ejecuciones.db")
    c = conn.cursor()
    c.execute("""
        UPDATE ejecuciones 
        SET estado = ? 
        WHERE nombre_archivo = ?
    """, (nuevo_estado, nombre_archivo))
    conn.commit()
    conn.close()

# ============================
# 📡 EJECUCIONES ACTIVAS EN MEMORIA
# ============================

def get_ejecuciones_activas():
    """Devuelve todas las ejecuciones que siguen en estado '⏳ Ejecutando'."""
    return [
        datos for datos in ejecuciones_activas.values()
        if isinstance(datos, dict) and datos.get("estado") == "⏳ Ejecutando"
    ]

# ============================
# 📚 OBTENER TODAS LAS EJECUCIONES
# ============================

def obtener_todas_las_ejecuciones():
    conn = sqlite3.connect("data/ejecuciones.db")
    c = conn.cursor()

    # Conectar también a auth.db para hacer JOIN con usuarios
    c.execute("ATTACH DATABASE 'data/auth.db' AS auth")

    query = """
        SELECT 
            e.id, 
            e.nombre_archivo, 
            e.hilos, 
            e.ramp_up, 
            e.duracion, 
            e.comentario,
            e.usuario, 
            auth.usuarios.grupo, 
            e.timestamp, 
            e.estado
        FROM ejecuciones e
        LEFT JOIN auth.usuarios ON e.usuario = auth.usuarios.username
        ORDER BY e.timestamp DESC
    """

    c.execute(query)
    resultados = c.fetchall()
    conn.close()
    return resultados


