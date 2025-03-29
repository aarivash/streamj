import streamlit as st
import os
import time
from datetime import datetime
from streamlit_autorefresh import st_autorefresh
from jmeter_runner import ejecutar_prueba_jmeter
from execution_manager import agregar_ejecucion, get_ejecuciones_activas

st.set_page_config(page_title="Ejecución de Pruebas", layout="wide")
st.title("🚀 Nueva prueba")

# 🌀 Auto refresco cada 3 segundos
st_autorefresh(interval=3000, key="auto_refresh")

# Formulario para subir prueba
with st.form("form_ejecucion"):
    st.subheader("📤 Sube archivo .jmx")
    archivo = st.file_uploader("Archivo JMX", type="jmx")
    hilos = st.number_input("🧵 Cantidad de hilos", min_value=1, value=10)
    ramp_up = st.number_input("⏱️ Ramp-up (segundos)", min_value=0, value=1)
    duracion = st.number_input("⏲️ Duración total (segundos)", min_value=1, value=60)
    comentario = st.text_input("🗒️ Comentario (opcional)", placeholder="Descripción de la prueba")
    submitted = st.form_submit_button("▶️ Iniciar prueba")

    if submitted and archivo:
        timestamp = int(time.time())
        nombre_archivo = f"demo-test_{timestamp}"
        ruta_jmx = f"data/jmx/{nombre_archivo}.jmx"
        report_path = f"data/reportes/{nombre_archivo}"

        with open(ruta_jmx, "wb") as f:
            f.write(archivo.read())

        agregar_ejecucion(nombre_archivo, hilos, ramp_up, duracion, comentario, timestamp=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        ejecutar_prueba_jmeter(nombre_archivo, hilos, ramp_up, duracion, comentario, report_path)
        st.success("✅ Prueba iniciada correctamente.")

# Estado de ejecuciones en curso
st.subheader("📊 Estado de ejecuciones")
ejecuciones = get_ejecuciones_activas()

if not ejecuciones:
    st.info("No hay ejecuciones activas en este momento.")
else:
    for ejec in ejecuciones:
        if isinstance(ejec, dict):
            with st.expander(f"🧪 {ejec['nombre_archivo']} — {ejec['estado']}"):
                log_path = f"data/logs/{ejec['nombre_archivo']}.log"

                if os.path.exists(log_path):
                    with open(log_path, "r") as f:
                        log_content = f.read()
                    st.code(log_content, language="bash")
                else:
                    st.warning("Log aún no generado.")
        else:
            st.warning(f"Ejecución no válida: {ejec}")
