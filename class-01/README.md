# Introducción al Desarrollo

## Resumen

¡Bienvenido al curso Code 201! En esta clase vamos a repasar los conceptos básicos de HTML, CSS y JavaScript, además de configurar nuestros sistemas para el desarrollo web profesional.

## Descripción general

- Introducción
- Resumen del curso 201
- Revisión de Canvas y sílabo de la clase
- Revisión del repositorio de GitHub para la clase
- Explicación de los comandos del terminal
- Explicación acerca del editor de texto y configuraciones en VSCode
- Preparación para el laboratorio

## Objetivos de aprendizaje

### Los estudiantes podrán

#### Describir y definir

- HTML
- CSS
- JavaScript
- VSCode
- Operaciones en la Interfaz de línea de comandos (CLI)
- GitHub

#### Ejecutar

- Crear una página en HTML desde cero, con las convenciones estructurales jerárquicas de la semántica de HTML5 apropiadas.
- Incluir una etiqueta `<script>` en un documento HTML que interactúe con el usuario mediante un prompt/alerta.
- Escribir código en JavaScript que interactúe con el usuario mediante un prompt y una alerta.
- Utilizar la línea de comandos para crear y cambiar directorios, crear y listar archivos, y abrir archivos en un editor de texto o en un navegador web.
- Instalar y utilizar plugins en un editor de texto, incluyendo un linter de JavaScript.

## Notas

### Unix y Git

Introducción a los conceptos esenciales de la gestión de archivos desde la línea de comandos y los conceptos fundamentales de Git y GitHub.

- `pwd` = print working directory
- `tree` = muestra la estructura del directorio
- `ls` = lista todos los archivos y carpetas del directorio en uso
- `ls -a` = lista todos los archivos y carpetas del directorio en uso incluyendo archivos ocultos de forma abreviada
- `ls -la` = lista todos los archivos y carpetas del directorio en uso incluyendo archivos ocultos de forma más detallada
- `cd` = cambiar de directorio
- `mkdir` = crear un directorio
- `touch` = crear un nuevo archivo
- `code <nombre>` = abrir este archivo en VSCode
- `code .` = abrir el directorio en uso en VSCode
- `mv` = mover un archivo
- `rm <nombre>` = eliminar un archivo de forma permanente. Advertencia: ¡no hay forma de recuperar el archivo!
- `cp <origen> <destino>` = copiar un archivo

### Configurar un linter de JavaScript

1. Para configurar el linter, comienza abriendo tu terminal
1. Escribe `cd` y presiona enter para navegar hasta tu directorio principal. Puede que ya estés ahí.
1. Escribe `code .eslintrc.json`, lo cual creará un nuevo archivo llamado `.eslintrc.json` en tu directorio principal, y lo abrirá en VSCode.
1. Copia el contenido del archivo `.eslintrc.json` que se encuentra en la raíz del repositorio de la clase.

### Configuraciones adicionales para VSCode

En la parte inferior izquierda de VSCode, haz click en el ícono de la tuerca y selecciona "Configuración". Usa la barra de búsqueda para establecer los siguientes valores:

- "editor.tabSize" debe estar en 2
- "editor.detectIndentation" debe ser verdadero
- "editor.wordWrap" debe establecerse como "on"
