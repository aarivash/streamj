import subprocess
import os
import threading
from database import guardar_resultado
from execution_manager import actualizar_estado

def ejecutar_prueba_jmeter(nombre_archivo, hilos, ramp_up, duracion, comentario, report_path):
    def hilo():
        try:
            # Rutas necesarias
            ruta_jmx = f"data/jmx/{nombre_archivo}.jmx"
            resultado_jtl = f"data/resultados/{nombre_archivo}.jtl"
            log_path = f"data/logs/{nombre_archivo}.log"

            # Asegurar carpetas
            os.makedirs("data/logs", exist_ok=True)
            os.makedirs("data/resultados", exist_ok=True)
            os.makedirs(report_path, exist_ok=True)

            # Comando de ejecución
            comando = [
                "jmeter",
                "-n",
                "-t", ruta_jmx,
                "-l", resultado_jtl,
                "-j", log_path,
                "-e",
                "-o", report_path,
                f"-Jthreads={hilos}",
                f"-Jrampup={ramp_up}",
                f"-Jduration={duracion}"
            ]

            # Registrar comando en log
            with open(log_path, "w") as log_file:
                log_file.write(f"[COMANDO] {' '.join(comando)}\n\n")

            # Ejecutar JMeter
            proceso = subprocess.Popen(
                comando,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                universal_newlines=True
            )

            with open(log_path, "a") as log_file:
                for linea in proceso.stdout:
                    log_file.write(linea)
                    log_file.flush()

            proceso.wait()

            # Procesar resultados
            total_requests, errores, promedio = procesar_jtl(resultado_jtl)
            error_pct = round((errores / total_requests) * 100, 2) if total_requests else 0
            resumen = f"{total_requests} requests | {errores} errores | {error_pct}% error | Promedio: {promedio} ms"

            estado = "✅ Éxito" if proceso.returncode == 0 else "❌ Falló"

            # Guardar en base de datos
            guardar_resultado(
                nombre=nombre_archivo,
                hilos=hilos,
                rampup=ramp_up,
                duracion=duracion,
                comentario=comentario,
                estado=estado,
                resumen_kpis=resumen,
                requests=total_requests,
                errores=errores,
                error_pct=error_pct,
                promedio_ms=promedio,
                log_path=log_path,
                report_path=report_path
            )

            # Actualizar estado en la ejecución activa
            actualizar_estado(nombre_archivo, estado)

        except Exception as e:
            actualizar_estado(nombre_archivo, "❌ Falló")
            with open(f"data/logs/{nombre_archivo}.log", "a") as log_file:
                log_file.write(f"[ERROR] {str(e)}\n")
            print(f"[ERROR] Fallo en ejecución de {nombre_archivo}: {e}")

    # Iniciar en hilo aparte
    threading.Thread(target=hilo, daemon=True).start()

def procesar_jtl(jtl_path):
    try:
        with open(jtl_path, "r") as archivo:
            lineas = archivo.readlines()

        total = sum(1 for l in lineas if "," in l and not l.startswith("timeStamp"))
        errores = sum(1 for l in lineas if "false" in l.lower())
        tiempos = []

        for linea in lineas[1:]:
            partes = linea.strip().split(",")
            if len(partes) > 1 and partes[1].isdigit():
                tiempos.append(int(partes[1]))

        promedio = round(sum(tiempos) / len(tiempos), 2) if tiempos else 0
        return total, errores, promedio

    except Exception as e:
        print(f"[ERROR] procesando JTL: {e}")
        return 0, 0, 0
