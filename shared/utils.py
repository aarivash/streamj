import csv
import os

def analizar_jtl(ruta_jtl):
    if not os.path.exists(ruta_jtl):
        return {
            "total": 0,
            "fallidas": 0,
            "error_rate": 0,
            "avg_response": 0,
            "throughput": 0
        }

    total = 0
    fallidas = 0
    suma_tiempo = 0
    timestamps = []

    with open(ruta_jtl, 'r', encoding='utf-8') as file:
        lector = csv.DictReader(file)
        for fila in lector:
            total += 1
            if fila.get('success') == 'false':
                fallidas += 1
            suma_tiempo += int(fila.get('elapsed', 0))
            timestamps.append(int(fila.get('timeStamp', 0)))

    if total == 0:
        return {
            "total": 0,
            "fallidas": 0,
            "error_rate": 0,
            "avg_response": 0,
            "throughput": 0
        }

    error_rate = (fallidas / total) * 100
    avg_response = suma_tiempo / total

    tiempo_total = (max(timestamps) - min(timestamps)) / 1000  # en segundos
    throughput = total / tiempo_total if tiempo_total > 0 else 0

    return {
        "total": total,
        "fallidas": fallidas,
        "error_rate": round(error_rate, 2),
        "avg_response": round(avg_response, 2),
        "throughput": round(throughput, 2)
    }
