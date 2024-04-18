# Funciones en JS, Pair Programming, e Introducción a CSS: Layout

## Review Lab 03:
- ¿Cuáles son los tipos de caja en diseño con CSS?
    - ¿Qué es un `box` en CSS?
    - R: Es cómo ve CSS a cada elemento HTML de nuestra página. Se compone de: content, padding, border, margin.

- ¿Con qué propiedades CSS alteramos la disposición de los elementos?
    - position: absolute, fixed, static, relative, sticky.
    - display: block, inline, flex, grid, inline-block...


- ¿Cómo iteramos `arrays`?
    - Usamos estructuras de flujo de control, como: for y while.
    - Usamos while cuando no sabemos exactamente cuántos ciclos se harán. Entonces condicionamos el bucle a alguna expresión.
    - Usamos for cuando tenemos una idea más exacta de la cantidad de ciclos que necesitamos.

- ¿Por qué usamos funciones?
    - Reutilizar el código que escribimos.
    - Es una forma de mantener ordenado los bloques de código.

- ¿Podemos crear funciones dentro de una función?
    - Si es posible.
    - Se les conoce también como anidar funciones.

- ¿Cómo las funciones ayudan a cumplir los principios DRY?
    - DRY: Dont repeat yourself / no repitas tu código.
    - Las funciones nos ayudan a NO repetir el código.

- ¿Los `arrays` ayudan a cumplir los principios DRY?
    - Si, ya que puedo repetir las instrucciones que quiero aplicar a un valor, N veces, tantos valores contenga el arreglo.

## Principio DRY
- DRY: Dont repeat yourself / no repitas tu código.
- Cuidad la Legibilidad en el código.
- Mejora la Mantenibilildad en el código.

## Funciones
- Scope (ámbito)
    - El lugar donde viven las variables declaradas en una funcion.
    - Para trasladar variables de un ambito de funcion afuera, usamos `return`.
- Con o sin parámetros.
    - Si tiene parámetros, puedes convertilos en opcionales de 2 formas:
        1. Dándole un valor por defecto.
        1. Evaluando si enviaron el argumento necesario (con un `if`).
- Llamarlas con o sin argumentos.
- Con o sin retorno.

## CSS Layout
- Viewport
    - El espacio disponible para tu pagina/app web.
- CSS layout vs. HTML (flujo normal)
    - CSS layout (Diseño con CSS) nos permite alterar el Flujo Normal de diseño HTML.
- Flujo Normal
- Display: block, inline, flex, grid
- Position: absolute, relative, fixed, sticky, static.
- Float: left, rigth, center.


