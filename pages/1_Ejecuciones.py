import streamlit as st
import os
import time
from datetime import datetime
from streamlit_autorefresh import st_autorefresh

from jmeter_runner import ejecutar_prueba_jmeter
from execution_manager import agregar_ejecucion, obtener_todas_las_ejecuciones
from shared.session_manager import validar_sesion, obtener_usuario_actual, mostrar_sidebar_usuario
from auth_manager import obtener_rol_usuario, obtener_grupo_usuario

# 🔐 Validar sesión
validar_sesion()
usuario_actual = obtener_usuario_actual()
rol_actual = obtener_rol_usuario(usuario_actual)
grupo_actual = obtener_grupo_usuario(usuario_actual)

st.set_page_config(page_title="Ejecución de Pruebas", layout="wide")
st.title("🚀 Nueva prueba")

# 👤 Sidebar con usuario y grupo
mostrar_sidebar_usuario()

# 🔁 Auto refresco cada 3 segundos
st_autorefresh(interval=3000, key="auto_refresh")

# 📤 Subir y ejecutar prueba
with st.form("form_ejecucion"):
    st.subheader("📤 Sube tu archivo de prueba (.jmx)")
    archivo = st.file_uploader("Selecciona archivo JMX", type="jmx", label_visibility="visible")
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
        fecha_actual = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        with open(ruta_jmx, "wb") as f:
            f.write(archivo.read())

        agregar_ejecucion(nombre_archivo, hilos, ramp_up, duracion, comentario, usuario_actual, fecha_actual)
        ejecutar_prueba_jmeter(nombre_archivo, hilos, ramp_up, duracion, comentario, report_path)
        st.success("✅ Prueba iniciada correctamente.")

# 📊 Mostrar estado de ejecuciones activas
st.subheader("📊 Estado de ejecuciones")
todas = obtener_todas_las_ejecuciones()
ejecuciones_visibles = []

for ejec in todas:
    (_, archivo, hilos, ramp_up, duracion, comentario, usuario, grupo, fecha, estado) = ejec

    if estado != "⏳ Ejecutando":
        continue

    if rol_actual == "admin" or usuario == usuario_actual or (grupo_actual and grupo_actual == grupo):
        ejecuciones_visibles.append(ejec)

if not ejecuciones_visibles:
    st.info("No hay ejecuciones activas disponibles para ti.")
else:
    for ejec in ejecuciones_visibles:
        _, nombre_archivo, _, _, _, _, _, _, _, estado = ejec
        with st.expander(f"🧪 {nombre_archivo} — {estado}"):
            log_path = f"data/logs/{nombre_archivo}.log"
            if os.path.exists(log_path):
                with open(log_path, "r") as f:
                    log_content = f.read()
                st.code(log_content, language="bash")
            else:
                st.warning("Log aún no generado.")
