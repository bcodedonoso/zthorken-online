# Zthorken Online

Tienda online desarrollada con React, Bootstrap y React Router (DSY1104 - Evaluación 2).

## Requisitos

- Node.js 20 o superior
- Google Chrome (para ejecutar las pruebas)

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo
npm run build    # compilar para producción
npm test         # pruebas unitarias con Jasmine + Karma
```

## Estructura

```
src/
  data/db.js     # base de datos simulada (CRUD + localStorage)
  pages/         # vistas
  App.jsx        # rutas
  main.jsx       # punto de entrada
```

## Datos

`src/data/db.js` guarda las colecciones `productos`, `categorias`, `usuarios`, `ordenes` y `blogs` en localStorage.

```js
import { getAll, getById, create, update, remove, resetDB } from './data/db.js'

getAll('productos')
getById('productos', 1)
create('categorias', { nombre: 'Accesorios' })
update('productos', 1, { stock: 10 })
remove('blogs', 2)
resetDB() // vuelve a los datos iniciales
```

## Pruebas

Los tests se escriben en archivos `*.spec.js` junto al componente (pueden usar JSX).
