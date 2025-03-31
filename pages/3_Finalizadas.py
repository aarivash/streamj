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

st.set_page_config(page_title="Pruebas Finalizadas", layout="wide")
st.title("📄 Pruebas Finalizadas")

mostrar_sidebar_usuario()


# =========================
# 📦 Función para obtener ejecuciones finalizadas
# =========================
def obtener_ejecuciones_finalizadas(usuario, grupo, rol):
    conn = sqlite3.connect("data/ejecuciones.db")
    c = conn.cursor()

    if rol == "admin":
        c.execute("SELECT * FROM ejecuciones WHERE estado != '⏳ Ejecutando' ORDER BY timestamp DESC")
        resultados = c.fetchall()
        conn.close()
        return resultados

    elif grupo:
        # Conectar a auth.db para obtener los usuarios del grupo
        conn_auth = sqlite3.connect("data/auth.db")
        c_auth = conn_auth.cursor()
        c_auth.execute("SELECT username FROM usuarios WHERE grupo = ?", (grupo,))
        usuarios_grupo = [row[0] for row in c_auth.fetchall()]
        conn_auth.close()

        if usuarios_grupo:
            placeholders = ",".join("?" * len(usuarios_grupo))
            query = f"""
                SELECT * FROM ejecuciones
                WHERE estado != '⏳ Ejecutando'
                AND usuario IN ({placeholders})
                ORDER BY timestamp DESC
            """
            c.execute(query, usuarios_grupo)
            resultados = c.fetchall()
            conn.close()
            return resultados
        else:
            conn.close()
            return []

    else:
        c.execute("""
            SELECT * FROM ejecuciones
            WHERE estado != '⏳ Ejecutando'
            AND usuario = ?
            ORDER BY timestamp DESC
        """, (usuario,))
        resultados = c.fetchall()
        conn.close()
        return resultados

# =========================
# 📊 Mostrar los resultados
# =========================
ejecuciones = obtener_ejecuciones_finalizadas(usuario, grupo, rol)

if not ejecuciones:
    st.info("No hay pruebas finalizadas aún.")
else:
    df = pd.DataFrame(ejecuciones, columns=[
        "ID", "Archivo", "Hilos", "Ramp-Up", "Duración", "Comentario",
        "Usuario", "Fecha", "Estado"
    ])
    st.dataframe(df, use_container_width=True)
