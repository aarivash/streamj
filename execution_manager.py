import threading
import time

# Diccionario global para las ejecuciones activas
ejecuciones_activas = {}

def agregar_ejecucion(nombre_archivo, hilos, ramp_up, duracion, comentario, timestamp=None):
    ejecuciones_activas[nombre_archivo] = {
        "nombre_archivo": nombre_archivo,
        "hilos": hilos,
        "ramp_up": ramp_up,
        "duracion": duracion,
        "comentario": comentario,
        "estado": "⏳ Ejecutando",
        "fecha": timestamp or time.strftime("%Y-%m-%d %H:%M:%S"),
        "thread": threading.current_thread().name
    }

def actualizar_estado(nombre_archivo, nuevo_estado):
    if nombre_archivo in ejecuciones_activas:
        ejecuciones_activas[nombre_archivo]["estado"] = nuevo_estado

def get_ejecuciones_activas():
    return [
        datos for datos in ejecuciones_activas.values()
        if isinstance(datos, dict) and datos.get("estado") == "⏳ Ejecutando"
    ]