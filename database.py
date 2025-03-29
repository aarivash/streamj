import sqlite3
from datetime import datetime
import pytz

DB_PATH = "data/jmeter.db"

def inicializar_db():
    """Crea la base de datos y la tabla resultados si no existen."""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS resultados (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre_archivo TEXT,
            fecha TEXT,
            hilos INTEGER,
            rampup INTEGER,
            duracion INTEGER,
            comentario TEXT,
            estado TEXT,
            resumen_kpis TEXT,
            requests INTEGER,
            errores INTEGER,
            error_pct REAL,
            promedio_ms REAL,
            reporte_html TEXT,
            report_path TEXT
        )
    ''')
    conn.commit()
    conn.close()

def guardar_resultado(
    nombre,
    hilos,
    rampup,
    duracion,
    comentario,
    estado,
    resumen_kpis,
    requests,
    errores,
    error_pct,
    promedio_ms,
    log_path,
    report_path
):
    """Guarda el resultado de una prueba en la base de datos."""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    tz = pytz.timezone("America/Santiago")
    fecha = datetime.now(tz).isoformat()

    c.execute('''
        INSERT INTO resultados (
            nombre_archivo, fecha, hilos, rampup, duracion,
            comentario, estado, resumen_kpis,
            requests, errores, error_pct, promedio_ms, reporte_html, report_path
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (
        nombre, fecha, hilos, rampup, duracion,
        comentario, estado, resumen_kpis,
        requests, errores, error_pct, promedio_ms, report_path, report_path
    ))
    conn.commit()
    conn.close()

def cargar_historial():
    """Retorna todos los resultados en forma de lista de diccionarios."""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('SELECT * FROM resultados ORDER BY fecha DESC')
    columnas = [col[0] for col in c.description]
    resultados = c.fetchall()
    conn.close()
    return [dict(zip(columnas, fila)) for fila in resultados]

def cargar_finalizadas():
    """Retorna solo las pruebas finalizadas."""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''
        SELECT * FROM resultados
        WHERE estado IN ('✅ Éxito', '❌ Falló', '⛔ Cancelado')
        ORDER BY fecha DESC
    ''')
    columnas = [col[0] for col in c.description]
    resultados = c.fetchall()
    conn.close()
    return [dict(zip(columnas, fila)) for fila in resultados]

def obtener_resultado_por_id(id_resultado):
    """Obtiene un resultado por su ID."""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('SELECT * FROM resultados WHERE id = ?', (id_resultado,))
    columnas = [col[0] for col in c.description]
    fila = c.fetchone()
    conn.close()
    return dict(zip(columnas, fila)) if fila else None

def actualizar_estado_resultado(nombre_archivo, nuevo_estado):
    """Actualiza el estado de una ejecución por nombre del archivo."""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''
        UPDATE resultados
        SET estado = ?
        WHERE nombre_archivo = ?
    ''', (nuevo_estado, nombre_archivo))
    conn.commit()
    conn.close()
