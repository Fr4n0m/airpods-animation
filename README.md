# AirPods Pro 2 - Hero Animation Clone

![animation-hero-airpodspro2_1](https://github.com/user-attachments/assets/2065d1a2-f730-41cb-9288-6f9afb7c3f3c)

Proyecto de aprendizaje enfocado en dominar animaciones con GSAP (GreenSock Animation Platform) y ScrollTrigger, recreando la animación del hero de la página oficial de Apple para los AirPods Pro 2.

## 🚀 Demo en Vivo

[Ver proyecto desplegado](https://airpods-animation-eight.vercel.app)

![animation-hero-airpodspro2_2](https://github.com/user-attachments/assets/fe91ddb0-3694-4df7-9df5-afbebcca9470)

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework web moderno
- **GSAP** - Librería de animación profesional
- **ScrollTrigger** - Plugin de GSAP para animaciones basadas en scroll
- **Canvas API** - Para renderizado de secuencia de imágenes
- **HTML5 & CSS3** - Estructura y estilos

## ✨ Características

- ✅ Animación de secuencia de imágenes en Canvas sincronizada con scroll
- ✅ Header dinámico que se oculta al hacer scroll
- ✅ SubNav con efecto blur y background al hacer scroll
- ✅ Animaciones de entrada suaves al cargar la página
- ✅ Diseño responsive y fiel al original de Apple
- ✅ Optimización de performance con 65 frames pre-cargados

## 📦 Instalación y Desarrollo

### Requisitos previos

- Node.js (v16 o superior)
- npm

### Pasos para ejecutar localmente

1. Clona el repositorio

```bash
git clone https://github.com/Fr4n0m/airpods-animation.git
cd airpods-animation
```

2. Instala las dependencias

```bash
npm install
```

3. Inicia el servidor de desarrollo

```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:4321`

### Comandos disponibles

| Comando           | Acción                                             |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Inicia servidor de desarrollo en `localhost:4321`  |
| `npm run build`   | Construye el proyecto para producción en `./dist/` |
| `npm run preview` | Vista previa local del build de producción         |

## 🎨 Estructura del Proyecto

```
/
├── public/
│   └── images/          # Secuencia de 65 frames de AirPods
├── src/
│   ├── components/
│   │   ├── Header.astro    # Navegación principal y SubNav
│   │   ├── Hero.astro      # Componente principal con Canvas
│   │   └── SubNav.astro    # Navegación secundaria
│   └── pages/
│       └── index.astro     # Página principal
└── package.json
```

## 📚 Lo que aprendí

Este proyecto me permitió profundizar en:

- Manejo avanzado de **GSAP Timelines** para sincronizar múltiples animaciones
- Uso de **ScrollTrigger** con `scrub` para animaciones fluidas vinculadas al scroll
- Renderizado de secuencias de imágenes en **Canvas** con alta performance
- Técnicas de **pre-carga de imágenes** para evitar parpadeos
- Animaciones de entrada con `gsap.fromTo()` y control de `immediateRender`
- Efectos de **backdrop-filter** y backgrounds dinámicos
- Optimización de animaciones para mantener 60fps

## 🎯 Inspiración

Este proyecto es un clon educativo de la página oficial de Apple para los AirPods Pro 2. Las imágenes y el diseño están inspirados en el sitio web original de Apple.

## ⚠️ Disclaimer

Este proyecto ha sido creado únicamente con fines educativos y de aprendizaje. No tiene propósitos comerciales. Todas las imágenes y recursos visuales pertenecen a Apple Inc. y se utilizan bajo Fair Use exclusivamente para práctica de desarrollo web.

**Apple, AirPods y AirPods Pro son marcas registradas de Apple Inc.**

## 📄 Licencia

Este proyecto está bajo la licencia MIT para el código. Los recursos visuales y marcas pertenecen a sus respectivos propietarios.

---

Desarrollado por Francisco Rodríguez - 2025
[Visitar Portfolio](https://codebyfran.es)
