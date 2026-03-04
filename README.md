# WhatsApp Clone - Trabajo Final

Este es el trabajo final para el curso de Frontend. Consiste en un clon de la interfaz de WhatsApp Web desarrollado con React.

## Requisitos Cumplidos

- [x] **Despliegue**: Listo para ser desplegado en Vercel/Netlify.
- [x] **Responsivo**: Adaptable desde 320px hasta 2000px.
- [x] **Accesibilidad**: Paleta de colores con alto contraste y diseño legible.
- [x] **React**: Desarrollado íntegramente con React 19.
- [x] **Estado**: Uso intensivo de `useState`, `useEffect` y `useContext`.
- [x] **Contexto**: Implementación de `ChatContext` para el manejo de mensajes y contactos.
- [x] **Enrutamiento**: Navegación fluida con `react-router-dom`.
- [x] **Formularios**: Formulario de envío de mensajes con validación básica.
- [x] **Componentes**: Arquitectura basada en componentes reutilizables.
- [x] **Parámetros de Búsqueda**: Filtrado de mensajes usando `useSearchParams`.

## Librerías Usadas

- **React**: Framework principal.
- **react-router-dom**: Para la navegación y manejo de rutas.
- **Bootstrap Icons**: Para la iconografía de la aplicación.
- **Vite**: Herramienta de construcción y servidor de desarrollo.

## Dificultades Presentadas

- **Responsividad en Celulares**: El mayor desafío fue manejar la transición entre la lista de chats y la vista de chat en pantallas pequeñas, lo resolví mediante rutas dinámicas y renderizado condicional en el `Layout`.
- **Manejo de Estado Global**: Coordinar la actualización del "último mensaje" en la lista lateral al enviar un mensaje desde la vista de chat, lo resolví mediante una estructura de estado centralizada en el Contexto.

## Cómo ejecutar el proyecto

1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Ejecutar `npm run dev`.
