# MAPRIOT Quiz App

Este proyecto es una aplicación interactiva diseñada para aprender y evaluar conocimientos sobre el Manual de Planes Reguladores (MAPRIOT) de Costa Rica.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
- Un navegador moderno (Chrome, Firefox, Edge, etc.)

## Instrucciones para ejecución local

Para ejecutar esta aplicación en tu computadora localmente, sigue estos pasos:

1. **Descargar y Descomprimir**: Asegúrate de haber extraído todos los archivos del ZIP en una carpeta.
2. **Abrir Terminal**: Abre una terminal o consola de comandos en la raíz de la carpeta del proyecto.
3. **Instalar Dependencias**:
   ```bash
   npm install
   ```
4. **Iniciar Servidor de Desarrollo**:
   ```bash
   npm run dev
   ```
5. **Ver la App**: Abre tu navegador en la dirección que aparezca en la terminal (usualmente `http://localhost:3000`).

## Notas importantes

- **Página en blanco**: Las aplicaciones de React modernas **no se pueden abrir haciendo doble clic directo** en el archivo `index.html` debido a restricciones de seguridad del navegador (CORS) relacionadas con módulos de JavaScript. Es obligatorio usar un servidor (como se describe arriba con `npm run dev`).
- **Antigravity / AI Studio**: Este proyecto está configurado para ejecutarse en el entorno de AI Studio. Si descargas el código, asegúrate de instalar las dependencias con `npm install` antes de intentar ejecutarlo.
- **Exportación PDF**: La funcionalidad de exportar a PDF utiliza la librería `jspdf` y requiere un entorno de ejecución adecuado.
