import streamlit as st
import pandas as pd
from database import cargar_finalizadas
from pytz import timezone

st.set_page_config(page_title="Pruebas Finalizadas", layout="wide")

st.title("✅ Pruebas Finalizadas")

# Cargar los datos desde la base de datos
datos = cargar_finalizadas()

# Convertir a DataFrame si es necesario
if isinstance(datos, list):
    datos = pd.DataFrame(datos)

# Verificar si se obtuvo un DataFrame válido y con datos
if not datos.empty:
    # Convertir la columna 'fecha' a datetime con zona horaria de Chile
    if not pd.api.types.is_datetime64_any_dtype(datos["fecha"]):
        datos["fecha"] = pd.to_datetime(datos["fecha"], errors="coerce", utc=True).dt.tz_convert("America/Santiago")

    # Filtro por estado
    with st.expander("🎯 Filtros avanzados"):
        estados = datos["estado"].dropna().unique().tolist()
        estado_seleccionado = st.multiselect("🔍 Filtrar por estado:", estados, default=estados)

        # Aplicar filtro por estado
        datos = datos[datos["estado"].isin(estado_seleccionado)]

    # Mostrar resultados
    st.dataframe(
        datos.sort_values(by="fecha", ascending=False).reset_index(drop=True),
        use_container_width=True,
        hide_index=True
    )
else:
    st.warning("No hay pruebas finalizadas o no se pudo cargar la información.")
