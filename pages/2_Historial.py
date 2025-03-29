import streamlit as st
st.set_page_config(page_title="Historial de Pruebas", layout="wide")

import pandas as pd
from database import cargar_historial
from shared.session_manager import validar_sesion, mostrar_sidebar_usuario

validar_sesion()
mostrar_sidebar_usuario()

st.title("📈 Historial de Ejecuciones")

# Cargar historial desde la base de datos
datos = cargar_historial()

# Convertir a DataFrame y manejar fechas
if datos:
    df = pd.DataFrame(datos)
    
    if not pd.api.types.is_datetime64_any_dtype(df["fecha"]):
        df["fecha"] = pd.to_datetime(df["fecha"], errors="coerce")

    # Filtros
    with st.expander("🔍 Filtrar historial"):
        col1, col2 = st.columns(2)
        test_name = col1.text_input("🔤 Filtrar por nombre del test:")
        fecha_desde = col2.date_input("📅 Desde:", value=df["fecha"].min().date())
        fecha_hasta = col2.date_input("📅 Hasta:", value=df["fecha"].max().date())

        df = df[
            (df["fecha"].dt.date >= fecha_desde) &
            (df["fecha"].dt.date <= fecha_hasta)
        ]
        if test_name:
            df = df[df["nombre_archivo"].str.contains(test_name, case=False, na=False)]

    # Mostrar resultados
    st.dataframe(
        df.sort_values(by="fecha", ascending=False).reset_index(drop=True),
        use_container_width=True,
        hide_index=True
    )
else:
    st.info("🛈 Aún no hay pruebas registradas en el historial.")

#if st.button("Cerrar sesión"):
#    cerrar_sesion()
    st.rerun()