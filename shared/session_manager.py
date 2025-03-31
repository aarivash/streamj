import streamlit as st
from shared.streamlit_cookies_manager import EncryptedCookieManager
import streamlit as st
from auth_manager import obtener_grupo_usuario
from .streamlit_cookies_manager import EncryptedCookieManager

# 🔐 Inicialización del gestor de cookies cifradas
cookies = EncryptedCookieManager(prefix="streamj")

# ============================
# 🔑 GESTIÓN DE SESIÓN
# ============================

def iniciar_sesion(username: str):
    """Inicia una sesión de usuario y guarda en cookies."""
    st.session_state.usuario = username
    st.session_state.autenticado = True
    cookies.set("usuario", username)
    cookies.set("autenticado", "true")

def cerrar_sesion():
    """Finaliza sesión, limpia estado y cookies, y recarga la app."""
    st.session_state.clear()
    cookies.delete("usuario")
    cookies.delete("autenticado")
    st.rerun()

def sesion_activa() -> bool:
    """
    Verifica si el usuario ya tiene una sesión activa.
    Prioriza `st.session_state` y sincroniza con cookies si es necesario.
    """
    # Sesión activa en memoria
    if st.session_state.get("autenticado") and st.session_state.get("usuario"):
        return True

    # Verificar en cookies si no hay estado
    if cookies.ready():
        usuario = cookies.get("usuario")
        autenticado = cookies.get("autenticado")
        if usuario and autenticado == "true":
            st.session_state.usuario = usuario
            st.session_state.autenticado = True
            return True
    return False

def obtener_usuario_actual() -> str:
    """Devuelve el nombre del usuario actual autenticado."""
    return st.session_state.get("usuario", "Desconocido")

def validar_sesion():
    """Valida que haya una sesión activa. Si no, bloquea acceso a la página."""
    if not sesion_activa():
        st.warning("⚠️ Debes iniciar sesión para acceder a esta página.")
        st.stop()

# ============================
# 🎛️ SIDEBAR DE USUARIO
# ============================

def mostrar_sidebar_usuario():
    if sesion_activa():
        usuario = st.session_state.get("usuario")
        grupo = obtener_grupo_usuario(usuario)

        with st.sidebar:
            st.markdown("### 👤 Usuario conectado")
            st.info(usuario)
            if grupo:
                st.caption(f"👥 Grupo: **{grupo}**")
            if st.button("Cerrar sesión 🚪"):
                cerrar_sesion()
