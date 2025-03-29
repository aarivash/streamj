import streamlit as st
from datetime import datetime, timedelta

class EncryptedCookieManager:
    def __init__(self, prefix="", max_age_days=7):
        self.prefix = prefix
        self.max_age_days = max_age_days
        self.cookies = st.query_params  # Solo lectura
        self._storage = dict(self.cookies)  # Copia para manipulación interna

    def _make_key(self, key):
        return f"{self.prefix}_{key}"

    def get(self, key):
        full_key = self._make_key(key)
        return self._storage.get(full_key, [None])[0]

    def set(self, key, value):
        full_key = self._make_key(key)
        self._storage[full_key] = [value]
        st.query_params.clear()
        st.query_params.update(self._storage)

    def delete(self, key):
        full_key = self._make_key(key)
        self._storage.pop(full_key, None)
        st.query_params.clear()
        st.query_params.update(self._storage)

    def save(self):
        # Ya no es necesario con query_params
        pass

    def ready(self):
        return True
