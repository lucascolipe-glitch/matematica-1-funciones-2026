# Matemática 1 · Unidad 2: Funciones · FaCiAS 2026

Sitio web estático con teoría, laboratorios gráficos y ejercicios interactivos para la Unidad 2 de Matemática 1.

## Contenidos

- Definición de función, relaciones entre variables, dominio, codominio e imagen.
- Lectura de gráficos: intersecciones, raíces, positividad, negatividad, crecimiento, decrecimiento y paridad.
- Función lineal: pendiente, ordenada al origen, ecuación por puntos, paralelismo y perpendicularidad.
- Función cuadrática: formas polinómica, factorizada y canónica; vértice, raíces e imagen.
- Función exponencial: dominio, imagen, asíntota y comportamiento.
- Funciones definidas por partes.
- Funciones de la forma `a(x-h)^n+k` y traslaciones.
- Inyectividad, sobreyectividad, biyectividad y función inversa.
- Modelos contextualizados: taxi, balde, crecimiento bacteriano y reducción porcentual.
- Práctica integradora aleatoria.

## Funciones interactivas

- Una sola sección visible por vez, como en la Unidad 1.
- Navegación lateral y botones Anterior/Siguiente.
- Exploradores gráficos para funciones lineales, cuadráticas, exponenciales, polinómicas e inversas.
- Evaluador de funciones por partes.
- Simulador del volumen de agua en un balde.
- Ejercicios con devolución inmediata.
- Videos de práctica enlazados desde el apunte de taller.
- Guardado automático del progreso mediante `localStorage`.
- Panel final del estudiante.
- Impresión completa o guardado como PDF desde el navegador.
- Diseño responsive para computadora, tablet y celular.

## Publicar en GitHub Pages

1. Crear un repositorio nuevo en GitHub.
2. Subir `index.html` y las carpetas `css` y `js` conservando la estructura.
3. Abrir **Settings → Pages**.
4. En **Build and deployment**, seleccionar **Deploy from a branch**.
5. Elegir la rama `main` y la carpeta `/ (root)`.
6. Guardar.

## Probar localmente

```bash
python3 -m http.server 8000
```

Luego abrir `http://localhost:8000`.

## Estructura

```text
matematica-1-funciones-2026/
├── index.html
├── README.md
├── css/
│   └── styles.css
└── js/
    └── app.js
```

Las fórmulas se renderizan con MathJax desde CDN. Los videos se cargan solo cuando el estudiante elige reproducirlos; al cambiar de sección se detienen.


## Ajustes de interfaz

- Las actividades de opción múltiple usan tarjetas seleccionables compatibles con MathJax, mouse y teclado.
- La tarjeta verde «Cómo estudiar» forma parte del bloque lateral y queda siempre debajo del índice, sin superponerse.
