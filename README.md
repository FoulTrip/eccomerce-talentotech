# 🛍️ Ecommerce App

Una aplicación web de comercio electrónico minimalista desarrollada con tecnologías web estándar: HTML, CSS y JavaScript. Utiliza la API de FakeStoreAPI para obtener datos de productos simulados, ofreciendo una experiencia de compra básica y funcional.

## 🚀 Características

- **Interfaz minimalista y responsive**: Diseño limpio y moderno que se adapta a diferentes tamaños de pantalla
- **Navegación por categorías**: Los productos están organizados en categorías para facilitar la búsqueda
- **Carrusel de productos**: Interfaz intuitiva para navegar por los productos de cada categoría
- **Carrito de compras**: Funcionalidad completa de carrito con contador en tiempo real
- **Integración con API**: Conexión con FakeStoreAPI para datos de productos reales

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos modulares organizados en archivos separados
- **JavaScript (ES6+)**: Lógica de la aplicación con módulos
- **FakeStoreAPI**: API externa para datos de productos

## 📁 Estructura del Proyecto

```
eccomerce-app/
├── index.html              # Archivo principal HTML
├── script.js               # Punto de entrada JavaScript
├── style.css               # Archivo CSS original (ahora modularizado)
├── README.md               # Este archivo
├── assets/                 # Recursos estáticos
│   ├── fonts/             # Fuentes personalizadas
│   ├── icons/             # Iconos de la aplicación
│   └── img/               # Imágenes de productos
├── css/                   # Estilos CSS modularizados
│   ├── base.css           # Variables CSS y estilos generales
│   ├── header.css         # Estilos del header
│   ├── products.css       # Estilos de productos y categorías
│   ├── cart.css           # Estilos del carrito
│   └── responsive.css     # Media queries para responsive
├── js/                    # Módulos JavaScript
│   ├── products.js        # Gestión de productos y API
│   ├── categories.js      # Lógica de categorías
│   ├── cart.js            # Funcionalidad del carrito
│   └── utils.js           # Utilidades generales
└── pages/                 # Páginas adicionales (si las hay)
```

## 🎨 Arquitectura CSS

Los estilos están organizados de manera modular para facilitar el mantenimiento:

- **`base.css`**: Variables CSS personalizadas y estilos globales
- **`header.css`**: Estilos específicos del header y navegación
- **`products.css`**: Estilos de tarjetas de productos, carruseles y categorías
- **`cart.css`**: Estilos del panel lateral del carrito
- **`responsive.css`**: Media queries para diferentes breakpoints

## 🚀 Instalación y Uso

### Prerrequisitos

- Navegador web moderno con soporte para ES6 modules
- Conexión a internet (para la API de FakeStoreAPI)

### Ejecutar la aplicación

1. Clona o descarga el repositorio
2. Navega al directorio del proyecto
3. Ejecuta un servidor local:

```bash
python -m http.server 8000
```

4. Abre tu navegador y ve a `http://localhost:8000`

## 📱 Funcionalidades

- **Visualización de productos**: Los productos se muestran en tarjetas con imagen, título y precio
- **Filtrado por categorías**: Navega fácilmente entre diferentes categorías de productos
- **Carrito interactivo**: Agrega productos al carrito con un clic
- **Contador del carrito**: Muestra la cantidad de productos en el carrito en tiempo real
- **Responsive design**: Se adapta perfectamente a móviles, tablets y desktop

## 🔧 Desarrollo

La aplicación está estructurada con módulos JavaScript para una mejor organización:

- **`script.js`**: Inicializa la aplicación y coordina los módulos
- **`products.js`**: Maneja la obtención de datos desde la API
- **`categories.js`**: Gestiona la lógica de categorías y renderizado
- **`cart.js`**: Controla todas las funcionalidades del carrito
- **`utils.js`**: Funciones de utilidad compartidas