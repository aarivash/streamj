import streamlit as st
import sqlite3
import pandas as pd
from shared.session_manager import validar_sesion, obtener_usuario_actual, cerrar_sesion
from auth_manager import obtener_rol_usuario, obtener_grupo_usuario
from shared.session_manager import mostrar_sidebar_usuario


# =========================
# 🔐 Validación de sesión
# =========================
validar_sesion()
usuario = obtener_usuario_actual()
rol = obtener_rol_usuario(usuario)
grupo = obtener_grupo_usuario(usuario)

# =========================
# 🎨 Configuración de página
# =========================
st.set_page_config(page_title="Historial de Pruebas", layout="wide")
st.title("📜 Historial de Ejecuciones")

# =========================
# 👤 Usuario conectado (sidebar)
# =========================
mostrar_sidebar_usuario()


# =========================
# 🔍 Obtener historial con visibilidad según rol/grupo
# =========================
def obtener_historial(usuario, grupo, rol):
    conn = sqlite3.connect("data/ejecuciones.db")
    c = conn.cursor()

    if rol == "admin":
        c.execute("SELECT * FROM ejecuciones ORDER BY timestamp DESC")
        resultados = c.fetchall()
        conn.close()
        return resultados

    elif grupo:
        # Obtener los usuarios del grupo desde auth.db
        conn_auth = sqlite3.connect("data/auth.db")
        c_auth = conn_auth.cursor()
        c_auth.execute("SELECT username FROM usuarios WHERE grupo = ?", (grupo,))
        usuarios_del_grupo = [row[0] for row in c_auth.fetchall()]
        conn_auth.close()

        if usuarios_del_grupo:
            placeholders = ",".join("?" * len(usuarios_del_grupo))
            query = f"""
                SELECT * FROM ejecuciones
                WHERE usuario IN ({placeholders})
                ORDER BY timestamp DESC
            """
            c.execute(query, usuarios_del_grupo)
            resultados = c.fetchall()
            conn.close()
            return resultados
        else:
            conn.close()
            return []

    else:
        c.execute("""
            SELECT * FROM ejecuciones 
            WHERE usuario = ?
            ORDER BY timestamp DESC
        """, (usuario,))
        resultados = c.fetchall()
        conn.close()
        return resultados

# =========================
# 📊 Mostrar los resultados
# =========================
historial = obtener_historial(usuario, grupo, rol)

if not historial:
    st.warning("No hay ejecuciones registradas aún.")
else:
    df = pd.DataFrame(historial, columns=[
        "ID", "Archivo", "Hilos", "Ramp-Up", "Duración", "Comentario", "Usuario", "Fecha", "Estado"
    ])
    st.dataframe(df, use_container_width=True)
