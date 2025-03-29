import streamlit as st
from shared.streamlit_cookies_manager import EncryptedCookieManager

cookies = EncryptedCookieManager(prefix="streamj")

def iniciar_sesion(username):
    st.session_state.usuario = username
    st.session_state.autenticado = True
    cookies.set("usuario", username)
    cookies.set("autenticado", "true")

def cerrar_sesion():
    st.session_state.clear()
    cookies.delete("usuario")
    cookies.delete("autenticado")
    st.rerun()

def sesion_activa():
    if st.session_state.get("autenticado") and st.session_state.get("usuario"):
        return True

    if cookies.ready():
        usuario = cookies.get("usuario")
        autenticado = cookies.get("autenticado")
        if usuario and autenticado == "true":
            st.session_state.usuario = usuario
            st.session_state.autenticado = True
            return True
    return False

def obtener_usuario_actual():
    return st.session_state.get("usuario", "Desconocido")

def validar_sesion():
    if not sesion_activa():
        st.warning("⚠️ Debes iniciar sesión para acceder a esta página.")
        st.stop()

def mostrar_sidebar_usuario():
    if sesion_activa():
        with st.sidebar:
            st.markdown("### 👤 Usuario conectado")
            st.info(st.session_state.get("usuario"))
            if st.button("Cerrar sesión 🚪"):
                cerrar_sesion()