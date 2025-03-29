# shared/navbar.py
import streamlit as st

def mostrar_navbar():
    if "usuario" not in st.session_state:
        st.warning("⚠️ Debes iniciar sesión para acceder a esta página.")
        st.stop()

    # Muestra el usuario actual en la barra lateral
    with st.sidebar:
        st.markdown("---")
        st.markdown(f"👤 **Usuario actual:** `{st.session_state['usuario']}`")
        if st.button("🚪 Cerrar sesión"):
            st.session_state.clear()
            st.switch_page("pages/0_Auth.py")
