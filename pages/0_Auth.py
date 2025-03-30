import streamlit as st
from auth_manager import (
    verificar_credenciales,
    registrar_usuario,
    registrar_acceso,
    obtener_ultimos_accesos,
    obtener_grupos_existentes
)
from shared.session_manager import iniciar_sesion, sesion_activa, obtener_usuario_actual

st.set_page_config(page_title="Autenticación", layout="centered")
st.title("🔐 Autenticación de Usuarios")

# Si ya está logueado, mostrar panel en lugar del formulario
if sesion_activa():
    usuario = obtener_usuario_actual()
    st.success(f"🎉 Ya estás autenticado como **{usuario}**.")

    st.markdown("### 📜 Últimos accesos")
    accesos = obtener_ultimos_accesos(usuario)

    if accesos:
        for i, fecha in enumerate(accesos, 1):
            st.markdown(f"**{i}.** {fecha}")
    else:
        st.info("Aún no se registran accesos para este usuario.")

    st.divider()
    st.markdown("### 🧪 ¿Qué puedes hacer con StreamJ?")
    st.markdown("""
    - Ejecutar pruebas de rendimiento con JMeter desde el navegador.
    - Monitorear recursos del sistema en tiempo real.
    - Consultar el historial completo de ejecuciones.
    - Filtrar y revisar pruebas finalizadas.
    - ¡Y más! 🎯
    """)

    st.info("Usa el menú lateral para navegar por las secciones de la plataforma.")

else:
    # Si no hay sesión, mostrar login/registro
    modo = st.radio("Selecciona una opción:", ["Iniciar sesión", "Registrarse"], horizontal=True)

    if modo == "Registrarse":
        st.subheader("📝 Registro de nuevo usuario")
        nuevo_usuario = st.text_input("Nombre de usuario", key="reg_user")
        nueva_contrasena = st.text_input("Contraseña", type="password", key="reg_pass")

        grupos_existentes = obtener_grupos_existentes()
        crear_nuevo_grupo = st.checkbox("Crear nuevo grupo", key="crear_grupo")

        if crear_nuevo_grupo:
            nuevo_grupo = st.text_input("Nombre del nuevo grupo", key="nuevo_grupo_input")
        else:
            if grupos_existentes:
                nuevo_grupo = st.selectbox("Selecciona un grupo existente", grupos_existentes, key="grupo_existente")
            else:
                st.info("No hay grupos existentes aún. Debes crear uno nuevo.")
                nuevo_grupo = st.text_input("Nombre del nuevo grupo", key="grupo_fallback")

        if st.button("Registrar", key="btn_registrar"):
            if not nuevo_usuario or not nueva_contrasena:
                st.warning("Debes ingresar un usuario y contraseña.")
            elif not nuevo_grupo:
                st.warning("Debes seleccionar o crear un grupo.")
            else:
                exito, mensaje = registrar_usuario(nuevo_usuario, nueva_contrasena, nuevo_grupo)
                if exito:
                    st.success(mensaje)
                    registrar_acceso(nuevo_usuario)
                    iniciar_sesion(nuevo_usuario)
                    st.success(f"🎉 Bienvenido, {nuevo_usuario}. Serás redirigido automáticamente a la página de ejecuciones.")
                    st.markdown("""<meta http-equiv="refresh" content="2;url=/Ejecuciones" />""", unsafe_allow_html=True)
                else:
                    st.error(mensaje)

    else:
        st.subheader("🔑 Ingreso de usuario")
        usuario = st.text_input("Usuario", key="login_user")
        contrasena = st.text_input("Contraseña", type="password", key="login_pass")

        if st.button("Iniciar sesión", key="btn_login"):
            if verificar_credenciales(usuario, contrasena):
                registrar_acceso(usuario)
                iniciar_sesion(usuario)
                st.success(f"🎉 Bienvenido, {usuario}. Serás redirigido automáticamente a la página de ejecuciones.")
                st.markdown("""<meta http-equiv="refresh" content="2;url=/Ejecuciones" />""", unsafe_allow_html=True)
            else:
                st.error("❌ Usuario o contraseña incorrectos.")
