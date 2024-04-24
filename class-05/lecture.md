# CSS: Imágenes, Color, Texto y Git Branching

## CSS: Posicionamiento
- Fixed
- Absolute y Relative
- Static

## CSS: Imágenes
- 

## CSS: Color

## CSS: Texto

## Git Branching

- ¿Es posible que varios developers puedan trabajar en el mismo proyecto de forma ordenada?
    - Si, siguiendo una metodología agile y con la creación de ramas
- ¿Qué es un branch (rama)?
    - Es una copia basada en otra, por defecto en main (recuerden que puede ser de cualquier rama), en la cual podemos experimentar, probar nuevos features del proyecto, etc
- ¿Cómo creamos nuevas ramas? / git checkout - Demo

```bash
# permite cambiar de una rama a otra
git checkout
```

```bash
# permite crear y cambiar a una rama
git checkout -b
```

- ¿Cómo mezclamos ramas? - Demo

[x] Subimos los cambios a github.com
[x] Crear un pull request (PR) para comparar la rama que subimos vs la rama `main` (destino)
[x] Esperamos a que aprueben nuestros cambios
[x] Hacemos merge en github.com y eliminamos esa rama
[x] En local cambiamos a `main` y hacemos pull de los cambios
[x] Eliminamos la rama a nivel local con el comando

```bash
git branch -d (branch)
```
