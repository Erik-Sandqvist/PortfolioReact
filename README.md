# Erik Sandqvist – Portfolio (React + Vite)

En personlig portfolio byggd med React, Vite, React Router, Three.js/React Three Fiber, Tailwind CSS och DaisyUI. Projektet deployas till GitHub Pages.

- Live: https://erik-sandqvist.github.io/PortfolioReact
- Byggkonfiguration: [vite.config.js](vite.config.js)
- Router-bootstrapping: [src/main.jsx](src/main.jsx)
- Huvudapp och routes: [`App`](src/App.jsx)
- Navigering: [`Navbar`](src/components/Navbar.jsx), [`MobileMenu`](src/components/MobileMenu.jsx)
- Startsida och 3D: [`Home`](src/components/sections/Home.jsx), [`LogoModel`](src/components/sections/LogoModel.jsx), [`ScrollCameraController`](src/components/ScrollCameraController.tsx)
- Projektkort: [`ProjectDiv`](src/components/ProjectDiv.jsx)
- Kontaktformulär (EmailJS): [`Contact`](src/components/sections/Contact.jsx)
- Övrigt UI: [`LoadingScreen`](src/components/LoadingScreen.jsx), [`RainDots`](src/components/RainDots.jsx), [`Footer`](src/components/Footer.jsx)
- Asset-hjälpare: [`asset`](src/utils/asset.js)

## Funktioner

- SPA med React Router och dynamisk basename som fungerar både lokalt och på GitHub Pages.
- 3D-modellvisning via React Three Fiber/Drei.
- Tailwind CSS + DaisyUI med tema-växling.
- E-post via EmailJS.
- Responsiv design, mobilmeny och enkla animationer.
