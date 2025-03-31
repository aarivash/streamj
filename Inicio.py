import streamlit as st
from auth_manager import (
    verificar_credenciales,
    registrar_usuario,
    registrar_acceso,
    obtener_ultimos_accesos,
    obtener_grupos_existentes
)
from shared.session_manager import (
    iniciar_sesion,
    sesion_activa,
    obtener_usuario_actual,
    cerrar_sesion
)

st.set_page_config(page_title="Inicio", layout="wide")

col1, col2 = st.columns([2, 1])

if sesion_activa():
    usuario = obtener_usuario_actual()

    with col1:
        st.markdown(f"""
        <div style='background-color: #f8f9fa; padding: 25px; border-radius: 12px;'>
            <h2 style='margin-bottom: 10px;'>🚀 Bienvenido a StreamJ</h2>
            <p style='font-size: 16px;'>🔐 Ya estás autenticado como <strong>{usuario}</strong>.</p>
            <h4>📜 Últimos accesos</h4>
        """, unsafe_allow_html=True)

        accesos = obtener_ultimos_accesos(usuario)
        if accesos:
            for i, fecha in enumerate(accesos, 1):
                st.markdown(f"**{i}.** {fecha}")
        else:
            st.info("Aún no se registran accesos para este usuario.")

        st.markdown("""
            <hr>
            <h4>🧪 ¿Qué puedes hacer con StreamJ?</h4>
            <ul>
                <li>Ejecutar pruebas de rendimiento con JMeter desde el navegador.</li>
                <li>Monitorear recursos del sistema en tiempo real.</li>
                <li>Consultar el historial completo de ejecuciones.</li>
                <li>Filtrar y revisar pruebas finalizadas.</li>
                <li>¡Y más! 🎯</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)

    with col2:
        st.markdown("""
        <div style='background-color: #f8f9fa; padding: 25px; border-radius: 12px; text-align: center;'>
            <h5 style='font-size: 18px;'>🪪 Estado de autenticación</h5>
            <p>Actualmente autenticado como <strong>{}</strong></p>
        """.format(usuario), unsafe_allow_html=True)

        if st.button("Cerrar sesión 🚪"):
            cerrar_sesion()
            st.success("Sesión cerrada. Serás redirigido al inicio.")
            st.markdown("""<meta http-equiv="refresh" content="2;url=/Inicio" />""", unsafe_allow_html=True)

        st.markdown("</div>", unsafe_allow_html=True)

else:
    with col1:
        st.markdown("""
        <div style='background-color: #f8f9fa; padding: 25px; border-radius: 12px;'>
            <h2>🚀 Bienvenido a StreamJ</h2>
            <h4>🧪 ¿Qué puedes hacer con StreamJ?</h4>
            <ul>
                <li>Ejecutar pruebas de rendimiento con JMeter desde el navegador.</li>
                <li>Monitorear recursos del sistema en tiempo real.</li>
                <li>Consultar el historial completo de ejecuciones.</li>
                <li>Filtrar y revisar pruebas finalizadas.</li>
                <li>¡Y más! 🎯</li>
            </ul>
        </div>
        """, unsafe_allow_html=True)

    with col2:
        st.markdown("""
        <div style='background-color: #f8f9fa; padding: 25px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);'>
            <h5 style='font-size: 18px;'>🪪 Estado de autenticación</h5>
        """, unsafe_allow_html=True)

        modo = st.radio(" ", ["Iniciar sesión", "Registrarse"], horizontal=True)

        if modo == "Registrarse":
            st.subheader("📝 Registro")
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
            st.subheader("🔑 Ingreso")
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

        st.markdown("</div>", unsafe_allow_html=True)
