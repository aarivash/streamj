import streamlit as st
st.set_page_config(page_title="Recursos del Sistema", layout="wide")

import psutil
from streamlit_autorefresh import st_autorefresh
from shared.session_manager import validar_sesion, mostrar_sidebar_usuario
from shared.session_manager import mostrar_sidebar_usuario


validar_sesion()
mostrar_sidebar_usuario()


st.title("🖥️ Monitor de Recursos del Sistema")
st.markdown("Visualiza el uso actual de recursos en tu máquina (actualización cada 5 segundos).")
st.divider()

# 🔄 Refresca cada 5 segundos
st_autorefresh(interval=5000, key="refresh")

# CPU
cpu_percent = psutil.cpu_percent(interval=1)
st.metric(label="🧠 CPU", value=f"{cpu_percent} %")

# RAM
mem = psutil.virtual_memory()
st.metric(label="📦 RAM", value=f"{mem.percent} %", delta=f"Libre: {round(mem.available / 1024**3, 1)} GB")

# Disco
disk = psutil.disk_usage('/')
st.metric(label="💽 Disco", value=f"{disk.percent} %", delta=f"Libre: {round(disk.free / 1024**3, 1)} GB")

# Red
net = psutil.net_io_counters()
st.markdown("### 📡 Red")
st.write(f"🔼 Enviado: {round(net.bytes_sent / 1024**2, 2)} MB")
st.write(f"🔽 Recibido: {round(net.bytes_recv / 1024**2, 2)} MB")

st.caption("♻️ Actualización automática cada 5 segundos.")

#if st.button("Cerrar sesión"):
#    cerrar_sesion()
st.rerun()