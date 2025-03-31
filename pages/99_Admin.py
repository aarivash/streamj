import streamlit as st

# ⚙️ Configuración inicial (DEBE estar al principio)
st.set_page_config(page_title="Panel de Administración", layout="wide")

# ==========================
# 📚 Importaciones
# ==========================
import pandas as pd
import sqlite3
import io

from shared.session_manager import (
    validar_sesion, 
    obtener_usuario_actual, 
    mostrar_sidebar_usuario
)
from auth_manager import (
    obtener_todos_los_usuarios,
    actualizar_rol_usuario,
    eliminar_usuario,
    registrar_usuario,
    obtener_grupos_existentes,
    crear_grupo,
    renombrar_grupo,
    eliminar_grupo,
    obtener_resumen_grupos,
    obtener_rol_usuario
)
from execution_manager import obtener_todas_las_ejecuciones

# ==========================
# 🔐 Validación de sesión y permisos
# ==========================
validar_sesion()
usuario = obtener_usuario_actual()
rol = obtener_rol_usuario(usuario)

# Sidebar (usuario y grupo)
mostrar_sidebar_usuario()

# Bloquear si no es admin
if rol != "admin":
    st.error("🚫 No tienes permisos para acceder al panel de administración.")
    st.stop()

# ==========================
# 🧭 Navegación por pestañas
# ==========================
st.title("🛠️ Panel de Administración")
tabs = st.tabs([
    "👥 Gestión de Usuarios", 
    "👨‍👩‍👧‍👦 Gestión de Grupos", 
    "📊 Ejecuciones", 
    "🧾 Auditoría", 
    "📈 Estadísticas"
])

# =====================================================
# 👥 GESTIÓN DE USUARIOS
# =====================================================
with tabs[0]:
    st.subheader("👥 Lista de usuarios registrados")
    usuarios = obtener_todos_los_usuarios()

    if not usuarios:
        st.info("No hay usuarios registrados aún.")
    else:
        df_usuarios = pd.DataFrame(usuarios, columns=["ID", "Usuario", "Grupo", "Rol"])
        st.dataframe(df_usuarios, use_container_width=True)

        st.divider()
        col1, col2 = st.columns(2)

        # 🎭 Cambiar rol
        with col1:
            usuario_editar = st.selectbox("Selecciona usuario para cambiar rol", df_usuarios["Usuario"])
            nuevo_rol = st.selectbox("Nuevo rol", ["user", "admin"])
            if st.button("Actualizar rol"):
                actualizar_rol_usuario(usuario_editar, nuevo_rol)
                st.success(f"✅ Rol actualizado para {usuario_editar}")
                st.rerun()

        # 🗑️ Eliminar usuario
        with col2:
            usuario_eliminar = st.selectbox("Selecciona usuario para eliminar", df_usuarios["Usuario"], key="eliminar")
            if st.button("Eliminar usuario"):
                if usuario_eliminar == usuario:
                    st.warning("❌ No puedes eliminar tu propio usuario.")
                else:
                    eliminar_usuario(usuario_eliminar)
                    st.success(f"🗑️ Usuario {usuario_eliminar} eliminado.")
                    st.rerun()

        # ➕ Crear nuevo usuario
        st.divider()
        st.subheader("➕ Crear nuevo usuario")
        nuevo_usuario = st.text_input("👤 Usuario", key="nuevo_usuario")
        nueva_contrasena = st.text_input("🔐 Contraseña", type="password", key="nueva_contra")
        grupos = obtener_grupos_existentes()
        crear_nuevo_grupo = st.checkbox("Crear nuevo grupo")

        if crear_nuevo_grupo or not grupos:
            grupo = st.text_input("🆕 Nombre del nuevo grupo")
        else:
            grupo = st.selectbox("👥 Grupo", grupos)

        nuevo_rol_usuario = st.selectbox("🎭 Rol", ["user", "admin"])

        if st.button("Crear usuario"):
            if not nuevo_usuario or not nueva_contrasena or not grupo:
                st.warning("Completa todos los campos.")
            else:
                exito, msg = registrar_usuario(nuevo_usuario, nueva_contrasena, grupo, rol=nuevo_rol_usuario)
                if exito:
                    st.success(msg)
                    st.rerun()
                else:
                    st.error(msg)

        # 🔄 Cambiar grupo
        st.divider()
        st.subheader("🔄 Cambiar grupo de un usuario")
        usuario_cambiar = st.selectbox("Selecciona usuario", df_usuarios["Usuario"], key="usuario_grupo")
        cambiar_a_nuevo = st.checkbox("Asignar a grupo nuevo")

        if cambiar_a_nuevo:
            nuevo_grupo = st.text_input("🔧 Nombre del nuevo grupo")
        else:
            if grupos:
                nuevo_grupo = st.selectbox("👥 Selecciona grupo existente", grupos)
            else:
                st.warning("No hay grupos existentes. Crea uno nuevo.")
                cambiar_a_nuevo = True
                nuevo_grupo = st.text_input("🔧 Nombre del nuevo grupo (obligatorio)")

        if st.button("Actualizar grupo"):
            if not nuevo_grupo:
                st.warning("Debes especificar un grupo.")
            else:
                conn = sqlite3.connect("data/auth.db")
                c = conn.cursor()
                c.execute("UPDATE usuarios SET grupo = ? WHERE username = ?", (nuevo_grupo, usuario_cambiar))
                conn.commit()
                conn.close()
                st.success(f"✅ Grupo de {usuario_cambiar} actualizado a {nuevo_grupo}")
                st.rerun()

# =====================================================
# 👨‍👩‍👧‍👦 GESTIÓN DE GRUPOS
# =====================================================
with tabs[1]:
    st.subheader("👨‍👩‍👧‍👦 Gestión de Grupos")
    grupos = obtener_grupos_existentes()

    if not grupos:
        st.info("No hay grupos creados aún.")
    else:
        st.markdown("### ✏️ Renombrar grupo")
        grupo_actual = st.selectbox("Grupo a renombrar", grupos)
        grupo_nuevo_nombre = st.text_input("Nuevo nombre")
        if st.button("Renombrar grupo"):
            renombrar_grupo(grupo_actual, grupo_nuevo_nombre)
            st.success(f"✅ Grupo '{grupo_actual}' renombrado a '{grupo_nuevo_nombre}'")
            st.rerun()

        st.markdown("### 🗑️ Eliminar grupo")
        grupo_eliminar = st.selectbox("Grupo a eliminar", grupos, key="grupo_eliminar")
        if st.button("Eliminar grupo"):
            ok, mensaje = eliminar_grupo(grupo_eliminar)
            if ok:
                st.success(mensaje)
                st.rerun()
            else:
                st.warning(mensaje)

    st.divider()
    st.markdown("### ➕ Crear nuevo grupo")
    nuevo_grupo = st.text_input("Nombre del nuevo grupo", key="crear_nuevo_grupo")
    if st.button("Crear grupo"):
        exito, mensaje = crear_grupo(nuevo_grupo)
        if exito:
            st.success(mensaje)
            st.rerun()
        else:
            st.error(mensaje)

    st.divider()
    st.subheader("📋 Grupos existentes")
    resumen_grupos = obtener_resumen_grupos()
    if resumen_grupos:
        df_grupos = pd.DataFrame(resumen_grupos, columns=["Grupo", "Cantidad de Usuarios"])
        st.dataframe(df_grupos, use_container_width=True)

# =====================================================
# 📊 EJECUCIONES DE TODOS LOS USUARIOS
# =====================================================
with tabs[2]:
    st.subheader("📊 Ejecuciones de todos los usuarios")
    ejecuciones = obtener_todas_las_ejecuciones()

    if not ejecuciones:
        st.info("No hay ejecuciones registradas aún.")
    else:
        df = pd.DataFrame(ejecuciones, columns=[
    "ID", "Archivo", "Hilos", "Ramp-Up", "Duración",
    "Comentario", "Usuario", "Grupo", "Fecha", "Estado"
])

        st.markdown("### 🔎 Filtros")
        col1, col2, col3 = st.columns(3)

        with col1:
            usuario_filtro = st.selectbox("👤 Usuario", ["Todos"] + sorted(df["Usuario"].unique().tolist()))
        with col2:
            estado_filtro = st.selectbox("📊 Estado", ["Todos"] + sorted(df["Estado"].unique().tolist()))
        with col3:
            fecha_filtro = st.date_input("📅 Fecha desde", value=None)

        df_filtrado = df.copy()
        if usuario_filtro != "Todos":
            df_filtrado = df_filtrado[df_filtrado["Usuario"] == usuario_filtro]
        if estado_filtro != "Todos":
            df_filtrado = df_filtrado[df_filtrado["Estado"] == estado_filtro]
        if fecha_filtro:
            df_filtrado = df_filtrado[df_filtrado["Fecha"] >= str(fecha_filtro)]

        st.markdown(f"**{len(df_filtrado)} ejecuciones encontradas.**")
        st.dataframe(df_filtrado, use_container_width=True)

        # 📥 Exportar
        st.markdown("### 💾 Exportar resultados")
        buffer = io.BytesIO()
        with pd.ExcelWriter(buffer, engine="xlsxwriter") as writer:
            df_filtrado.to_excel(writer, index=False, sheet_name="Ejecuciones")
        st.download_button(
            label="📥 Descargar Excel",
            data=buffer,
            file_name="ejecuciones_filtradas.xlsx",
            mime="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        )

# =====================================================
# 🧾 AUDITORÍA & 📈 ESTADÍSTICAS (Placeholders)
# =====================================================
with tabs[3]:
    st.subheader("🧾 Auditoría (pendiente)")
    st.info("Esta sección se habilitará en próximas versiones.")

with tabs[4]:
    st.subheader("📈 Estadísticas (pendiente)")
    st.info("Esta sección se habilitará en próximas versiones.")
