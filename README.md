# AirPods Pro 2 Hero Animation Clone

[![Astro](https://img.shields.io/badge/Astro-5.15.9-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?logo=greensock&logoColor=white)](https://gsap.com/)
[![ScrollTrigger](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02)](https://gsap.com/scrolltrigger/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://airpods-animation-eight.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-97CA00.svg)](./LICENSE)

![animation-hero-airpodspro2_1](https://github.com/user-attachments/assets/2065d1a2-f730-41cb-9288-6f9afb7c3f3c)

Proyecto de aprendizaje centrado en la recreación de la animación del hero de AirPods Pro 2 de Apple, con foco en animaciones avanzadas con GSAP y sincronización con scroll.

## Demo en vivo

[Ver proyecto desplegado](https://airpods-animation-eight.vercel.app)

![animation-hero-airpodspro2_2](https://github.com/user-attachments/assets/fe91ddb0-3694-4df7-9df5-afbebcca9470)

## Tecnologías

- Astro
- GSAP
- ScrollTrigger
- Canvas API
- HTML5 y CSS3

## Funcionalidades

- Animación de secuencia de imágenes en Canvas sincronizada con el scroll.
- Header dinámico con comportamiento de ocultación durante el desplazamiento.
- SubNav con efecto blur y cambio de fondo en función del scroll.
- Animaciones de entrada en la carga inicial de la página.
- Diseño responsive con fidelidad visual respecto a la referencia original.
- Precarga de 65 frames para mejorar fluidez y rendimiento.

## Instalación y desarrollo

### Requisitos

- Node.js 16 o superior
- npm

### Ejecución local

```bash
git clone https://github.com/Fr4n0m/airpods-animation.git
cd airpods-animation
npm install
npm run dev
```

La aplicación quedará disponible en `http://localhost:4321`.

### Scripts disponibles

| Comando           | Descripción                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Inicia el servidor de desarrollo                 |
| `npm run build`   | Genera la versión de producción en `dist/`       |
| `npm run preview` | Sirve localmente la build de producción          |

## Estructura del proyecto

```text
/
├── public/
│   └── images/             # Secuencia de 65 frames
├── src/
│   ├── components/
│   │   ├── Header.astro    # Navegación principal y SubNav
│   │   ├── Hero.astro      # Hero principal con Canvas
│   │   └── SubNav.astro    # Navegación secundaria
│   └── pages/
│       └── index.astro     # Entrada principal
└── package.json
```

## Objetivo del proyecto

Este trabajo se desarrolló con fines formativos para profundizar en:

- GSAP Timelines y coordinación de animaciones.
- ScrollTrigger con `scrub` para interacción ligada al scroll.
- Renderizado de secuencias de imágenes con Canvas.
- Estrategias de precarga para minimizar parpadeos.
- Optimización de animaciones para mantener una experiencia fluida.

## Inspiración

Proyecto inspirado en la página oficial de Apple para AirPods Pro 2, replicado exclusivamente con propósito educativo.

## Aviso legal

Este repositorio no tiene fines comerciales. Las imágenes, recursos visuales y marcas asociadas pertenecen a Apple Inc. y se utilizan únicamente con fines de práctica y aprendizaje.

Apple, AirPods y AirPods Pro son marcas registradas de Apple Inc.

## Licencia

El código fuente se distribuye bajo licencia MIT. Los recursos visuales y marcas pertenecen a sus respectivos propietarios.

---

Developed by Francisco Rodriguez - 2025  
[Portfolio](https://codebyfran.es)

---

# AirPods Pro 2 Hero Animation Clone (English)

![animation-hero-airpodspro2_1](https://github.com/user-attachments/assets/2065d1a2-f730-41cb-9288-6f9afb7c3f3c)

Learning-focused project that recreates Apple AirPods Pro 2 hero animation, with emphasis on advanced GSAP animation workflows and scroll-based synchronization.

## Live demo

[View deployed project](https://airpods-animation-eight.vercel.app)

![animation-hero-airpodspro2_2](https://github.com/user-attachments/assets/fe91ddb0-3694-4df7-9df5-afbebcca9470)

## Technologies

- Astro
- GSAP
- ScrollTrigger
- Canvas API
- HTML5 and CSS3

## Features

- Canvas image-sequence animation synchronized with scroll.
- Dynamic header that hides on scroll.
- SubNav with blur and background transition based on scroll position.
- Intro animations on initial page load.
- Responsive layout with visual fidelity to the original reference.
- Preloading of 65 frames for smoother performance.

## Setup and development

### Requirements

- Node.js 16+
- npm

### Local run

```bash
git clone https://github.com/Fr4n0m/airpods-animation.git
cd airpods-animation
npm install
npm run dev
```

The app will be available at `http://localhost:4321`.

### Available scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Starts the development server                    |
| `npm run build`   | Builds the production version into `dist/`       |
| `npm run preview` | Serves the production build locally              |

## Project structure

```text
/
├── public/
│   └── images/             # 65-frame image sequence
├── src/
│   ├── components/
│   │   ├── Header.astro    # Main navigation and SubNav
│   │   ├── Hero.astro      # Main hero with Canvas
│   │   └── SubNav.astro    # Secondary navigation
│   └── pages/
│       └── index.astro     # Main entry page
└── package.json
```

## Project goal

This project was built for learning purposes, with a focus on:

- GSAP Timelines and multi-animation orchestration.
- ScrollTrigger with `scrub` for scroll-linked interaction.
- Canvas-based image sequence rendering.
- Image preloading strategies to avoid flicker.
- Animation optimization to maintain smooth playback.

## Inspiration

This is an educational clone inspired by the official Apple AirPods Pro 2 webpage.

## Disclaimer

This repository is non-commercial. All images, visual assets, and trademarks belong to Apple Inc. and are used only for educational and practice purposes.

Apple, AirPods, and AirPods Pro are registered trademarks of Apple Inc.

## License

The source code is released under the MIT License. Visual assets and trademarks belong to their respective owners.
