# 🚀 StreamJ – Plataforma UI para pruebas de rendimiento con JMeter

Bienvenido a **StreamJ**, una interfaz web desarrollada con **Streamlit** para facilitar la ejecución, monitoreo y análisis de pruebas de rendimiento usando **Apache JMeter**.

---

## 🧰 Características

- ✅ Ejecución de archivos `.jmx` personalizados
- 📊 Visualización en tiempo real de pruebas activas
- 📁 Historial de pruebas finalizadas
- 📈 Monitoreo de recursos del sistema (CPU, RAM, disco, red)
- 💡 Pensado para ser usado localmente o dentro de una red privada

---

## 📦 Requisitos

Asegúrate de tener instalado en tu servidor o máquina local:

- Python 3.8+
- Apache JMeter (instalado y agregado al PATH)
- Ubuntu 20.04 o superior (o compatible)
- Git (para clonar o subir a GitHub)

---

## ⚙️ Instalación en Ubuntu (comandos utilizados)

```bash
# 1. Clona el repositorio o crea el proyecto
git clone https://github.com/tu_usuario/streamj.git
cd streamj

# 2. Crea un entorno virtual (opcional pero recomendado)
python3 -m venv venv
source venv/bin/activate

# 3. Instala las dependencias
pip install -r requirements.txt

# 4. Corre la aplicación Streamlit en red local
streamlit run Inicio.py --server.address=0.0.0.0 --server.port=8501


streamj/
│
├── Inicio.py                # Página principal (antiguamente app.py o main.py)
├── pages/
│   ├── 1_Ejecuciones.py     # Subida y ejecución de pruebas JMeter
│   ├── 2_Historial.py       # Historial de ejecuciones pasadas
│   ├── 3_Finalizadas.py     # Visualización de pruebas completadas
│   └── 4_Recursos.py        # Monitor de recursos del sistema
│
├── data/                    # Reportes, logs, .jmx
│   ├── jmx/
│   ├── reportes/
│   └── logs/
│
├── shared/                 # Funciones comunes (login, utilidades)
├── jmeter_runner.py
├── execution_manager.py
├── database.py
├── requirements.txt
└── README.md               # Este archivo


📁 Estructura del Proyecto
bash
Copy
Edit
streamj/
│
├── Inicio.py                # Página principal (antiguamente app.py o main.py)
├── pages/
│   ├── 1_Ejecuciones.py     # Subida y ejecución de pruebas JMeter
│   ├── 2_Historial.py       # Historial de ejecuciones pasadas
│   ├── 3_Finalizadas.py     # Visualización de pruebas completadas
│   └── 4_Recursos.py        # Monitor de recursos del sistema
│
├── data/                    # Reportes, logs, .jmx
│   ├── jmx/
│   ├── reportes/
│   └── logs/
│
├── shared/                 # Funciones comunes (login, utilidades)
├── jmeter_runner.py
├── execution_manager.py
├── database.py
├── requirements.txt
└── README.md               # Este archivo
📡 Acceso desde otros dispositivos
Si estás en una red local, puedes acceder desde otro equipo con la IP del servidor:

cpp
Copy
Edit
http://192.168.1.102:8501
📝 Comandos útiles de Git
bash
Copy
Edit
# Inicializar repo (una vez)
git init
git add .
git commit -m "Primer commit"

# Enlazar a GitHub
git remote add origin https://github.com/tu_usuario/streamj.git
git branch -M main
git push -u origin main

# Para futuros cambios
git add .
git commit -m "Cambios realizados"
git push
🙌 Créditos
Desarrollado por [Tu nombre o equipo] – 2025
Con ❤️ y mucha cafeína ☕

📃 Licencia
Este proyecto es libre de uso y modificación bajo la MIT License.
