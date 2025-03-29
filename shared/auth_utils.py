import streamlit as st

def require_login():
    if "usuario" not in st.session_state:
        st.warning("⚠️ Debes iniciar sesión para acceder a esta página.")
        st.stop()
