## Guía del proyecto final

¡Bienvenido a la semana del proyecto! Esta es una lista de prácticas recomendadas para un flujo de trabajo adecuado de Git y GitHub con tu equipo del proyecto.

*Nota: Se toma asistencia en todas las reuniones programadas a la hora habitual, incluso durante las semanas del proyecto.*

Antes de comenzar a escribir código, tómate el tiempo para planificar con tu equipo. Asegúrate de que todos estén de acuerdo con los objetivos de la aplicación. Una vez que se decidan por una idea, prepárense para presentar un pitch al instructor.

## Tu pitch debe incluir lo siguiente:

1. [Acuerdo de equipo](https://entertechschool.github.io/common_curriculum/projects/Project_Prep_1)
1. [Aprobación de la idea](https://entertechschool.github.io/common_curriculum/projects/Project_Prep_2)
1. [Creación de herramientas](https://entertechschool.github.io/common_curriculum/projects/Project_Prep_3)
1. [Creación del pitch](https://entertechschool.github.io/common_curriculum/projects/Project_Prep_4)

## Organización del Proyecto

Aquí hay más información sobre las organizaciones de GH....

Crea una organización haciendo click en el signo más en la esquina superior derecha de GitHub. A continuación, crea tu(s) repositorio(s) dentro de la organización. Todos los miembros del equipo deben agregarse como colaboradores en la organización.

Dentro del repositorio, haz click en la pestaña "Project" y luego haga clic en el botón "Create a project". Esto te permitirá crear un tablero del proyecto asociado al repositorio. Crea varias columnas con nombres significativos, como "To-Do", "In progress", "Under review", y "Completed".

Llena tu proyecto con issues. Cada issue debe ser un elemento pequeño, normalmente vinculado a una tarea de funcionalidad. A medida que trabajas en un issue, asígnatelo y muévelo a la columna "In progress". Esto proporcionará una forma fácil para que todos los miembros del equipo vean el progreso de cada issue y sepan quién está trabajando en un issue en particular.

_¿Por qué?:_
> Los issues son útiles para gestionar pequeñas funciones que una persona o dos pueden abordar de forna razonable en un período corto de tiempo. El tablero del proyecto crea una imagen clara de las tareas actuales del equipo y el estado actual del proyecto.

Cuando se utilizan los issues de GitHub, existe la ventaja adicional de poder cerrar un issue a través de un commit o un comentario en un pull request (PR). Por ejemplo, un commit o comentario puede decir "Closes #42" y el issue se cerrará automáticamente cuando se haga merge al pull request. Github reconoce las siguientes palabras clave para cerrar un issue: `close`, `closes`, `closed`, `fixes`, y `fixed`.

Puedes utilizar otras herramientas de gestión de proyectos además de GitHub Projects, pero tu código base debe estar en GitHub.

## Requisitos del Proyecto

1. Linter
   - Tu repositorio debe incluir un archivo `.eslintrc.json`, que puedes encontrar en el repositorio principal de tu clase.

1. .gitignore
   - Tu repositorio debe incluir un archivo `.gitignore`, que puedes encontrar en el repositorio principal de tu clase.

1. Licencia
   - Tu repositorio debe inicializarse con una licencia MIT. Asegúrate de que los recursos que utilizas son de código abierto y que también están disponibles bajo una licencia MIT o similar.

### Límites técnicos

Tu proyecto debe utilizar y centrarse en las tecnologías que aprendiste en Code 201.

Específicamente, estas son las cosas que ****no se te permitirá*** utilizar:

- Librerías/frameworks como React, Vue, Angular, etc.
- Frameworks CSS como Bootstrap o Skeleton
- SASS, LESS o cualquier otro lenguaje de extensión CSS

**Puedes** aprender y utilizar otras librerías de JavaScript si tu instructor te da permiso.

Si su equipo tiene alguna pregunta sobre lo que se puede o no se puede utilizar, consúltalo con el personal docente.

### Documentación

Tu proyecto deberá estar documentado en GitHub y dentro de tu código base.

En GitHub, crea un archivo `README.md` como documento de entrada principal de tu repositorio. Continúa actualizándolo a medida que tu proyecto evolucione.

Como mínimo, tu "README.md" deberá incluir lo siguiente:

- El nombre del proyecto
- Los nombres de los miembros del equipo
- Una descripción del proyecto
- La descripción general del problema y cómo el proyecto resuelve esos problemas
- Versionado semántico, comenzando con la versión 1.0.0 e incrementando a medida que se realicen cambios
- Una lista de las librerías, frameworks o paquetes que la aplicación necesita para funcionar correctamente. Si es necesario, proporciona instrucciones que el usuario debe seguir para que la aplicación se pueda ejecutar en su propio equipo.
- Una captura de pantalla de tus puntuaciones de Lighthouse.

Dentro de tu código, documenta con comentarios significativos. Por ejemplo, un comentario puede proporcionar un resumen de lo que está haciendo la función que se encuentra debajo o describir la relación entre dos variables.

Los comentarios deberán actualizarse según sea necesario. Elimina todo el código no utilizado y comentado antes de realizar un commit en GitHub.

### Estructura de archivos

Antes de estructurar tus archivos dentro del repositorio, determina cómo organizarás tu proyecto. Deberás organizar tus archivos en carpetas de forma significativa. Por ejemplo, todos tus archivos CSS deben estar dentro de una carpeta `css`.

Este es un ejemplo de estructura de archivos:

```bash
.
├── about-us.html
├── index.html
├── quiz.html
├── css
|   ├── about-us.css
|   ├── home.css
|   └── quiz.css
└── js
    ├── home.js
    └── quiz.js
```

### Estilo del código

Sigue el estilo de código que has aprendido a lo largo de este curso. Asegúrate de que el equipo utilice nombres pertinentes y descriptivos para todos los archivos, variables, nombres de funciones, etc. Sigue las prácticas recomendadas con mayúsculas y minúsculas, espaciado e indentación.

Tu equipo debe decidir las convenciones de nomenclatura estándar que utilizarán en todo el proyecto y responsabilizarse mutuamente de estos estándares. No utilicen nombres graciosos u ofensivos. Escribe un código que te enorgullezca mostrar a un futuro empleador.

El código base también debe seguir una organización de código similar de un archivo a otro. Por ejemplo, todos los archivos que afectan al estilo de la aplicación deben seguir patrones y sintaxis similares.

## Flujo de trabajo diario del equipo

Como equipo, deben decidir cómo trabajarán en su proyecto cada día.

Al comienzo del día, es útil tener una reunión entre los miembros del equipo para asegurarse de que todos sepan lo que está sucediendo con el proyecto y para hablar del plan del día. Es aconsejable tener chequeos adicionales a la hora del almuerzo y al final del día. Con cada chequeo, evalúen el porcentaje actual de MVP y hagan una predicción de cuándo el equipo alcanzará el MVP completo.

En sus chequeos matutinos, hablen de las funcionalidades en las que cada miembro planea trabajar. Determinen si el miembro del equipo trabajará individualmente, en pareja, o si todo el equipo trabajará en una sola funcionalidad juntos, lo que se conoce como "mob programming".

Además, utilicen este tiempo para hablar sobre cualquier problema interpersonal que pueda surgir. Es mejor abordarlos de frente y resolver cualquier tensión en lugar de permitir que la presión aumente.

## Stand-up

Todos los días, los instructores se acercarán a tu grupo para un stand-up formal. El stand-up debe durar aproximadamente 10 minutos por equipo. Algunos instructores eligirán hacer un segundo stand-up más tarde en el mismo día.

_¿Por qué?:_
> Los stand-ups le dan tanto al equipo del proyecto como a los instructores información sobre el estado actual de su proyecto y el progreso que el equipo espera lograr cada día.

Durante el stand-up, cada miembro del equipo se pondrá de pie y se turnará para hablar sobre tres puntos:

> 1. Lo que lograste personalmente ayer
> 1. Lo que planeas lograr hoy
> 1. Cualquier cosa que te impida progresar

## Logros Diarios

Día 1: Presenta el pitch a tu instructor. Una vez que se apruebe la idea, crea tu repositorio, llena tu tablero de proyecto con issues, comienza a estructurar tus archivos y comienza a plantear tus requisitos. Despliega tu sitio y comienza a implementar funcionalidades.

Día 2: Este deberá ser un día centrado en la construcción de funcionalidades.

Día 3: Continúa creando las funcionalidades. Procura tener el MVP completo al final del día.

Día 4: Trabaja en el estilo y refactorización adicionales. Trabaja en algunos logros adicionales. Practica tu presentación.

Día 5: ¡Día de la presentación!

## Git

Todo el equipo deberá seguir el mismo proceso para sincronizar el código base en GitHub y en sus equipos locales.

La rama main es el origen de tu despliegue, la cual solo debe tener código completamente funcional. Se debe crear una rama development como fuente principal para que las ramas externas hagan merge, y solo la rama development debe hacer merge con la rama main.

Todo el trabajo debe estar en ramas de funcionalidades con un nombre pertinente. Las ramas de funcionalidades deben crearse a partir de la rama development. Cuando se complete la funcionalidad, crea un pull request desde tu rama de funcionalidad a la rama development.

Cuando inicies una nueva funcionalidad y cada vez que un pull request haga merge con la rama development, asegúrate de que la rama development local esté actualizada. Revisa la rama development y, a continuación, haz un pull a la rama development. Crea la nueva rama a partir de la rama development actualizada.

Asegúrate siempre de que estés trabajando con el código base más actualizado. Esto evitará que escribas código redundante o sobrescribir código que tú u otro miembro del equipo ya escribió.

Si se ha hecho merge a un pull request de un compañero de equipo y estás trabajando en una rama, pero no estás listo para hacer push a tus cambios, aún puedes hacer pull a esos cambios mientras sigues trabajando en tu rama de funcionalidad. Para hacer eso, haz add y conmmit a los cambios en tu rama de funcionalidad local. Revisa tu rama main o development y haz pull a los cambios. A continuación, revisa tu rama de funcionalidad y ejecuta el comando `git merge main` si se ha hecho pull a la rama main y `git merge development` si se ha hecho pull a la rama development.

## Pull Requests

Cuando completes y pruebes tus funcionalidades en la rama local, estarás listo para hacer add, commit y push a esos cambios en GitHub. Luego, crea un pull request desde tu rama de funcionalidad a la rama development. NO hagas merge a tu propio pull request. Pídele a uno de los miembros de tu equipo que revise y apruebe el request.

Si el pull request no está listo para el merge, deja comentarios detallados y solicita cambios al creador del pull request.

Cuando se haga merge al pull request con la rama development, cada miembro del equipo deberá hacer check out a sus propisa ramas development locales y hacer pull a los cambios. A continuación, prueba el código en el navegador para asegurarte de que las funcionalidades deseadas se han implementado correctamente.

Periódicamente, según lo determine el equipo, realiza un pull request desde la rama development a la rama main y sigue el mismo proceso para probar los cambios en la rama main en los equipos locales de todos. Hacer merge a los pull request con la rama main también deberá actualizar el sitio desplegado, por lo que también debes confirmar la funcionalidad allí.

Después de que se haga merge al pull request, deja la rama en GitHub aunque GitHub te diga que puedes eliminarla. Esto ayuda con el mantenimiento general de registros en el proyecto.

## Despliegue

Despliega tu proyecto en GitHub Pages y prepárate para realizar la presentación desde la versión desplegada de tu sitio.

Para desplegar en GitHub pages, ve a la pestaña "Settings" en el repositorio. Desplázate hasta la sección "GitHub Pages". En el menú desplegable "Source", selecciona tu rama main y haz click en "Save". A continuación, verás una URL desplegada y podrás hacer click en ella para ver el sitio desplegado.

Ten en cuenta que el enlace desplegado puede tardar unos minutos en actualizarse y mostrar el código actualizado tal y como aparece en la rama main. Si no ves que el sitio desplegado se actualiza después de aproximadamente 30 minutos, revisa el código base para asegurarte de que no hay errores en la funcionalidad al ejecutar tu código localmente.

Despliega el sitio el primer día de la semana del proyecto.

Después de la creación inicial del repositorio, crea la estructura de un archivo básico `index.html` con un elemento de encabezado o algo similar. A continuación, haz push a este código en GitHub y despliégalo como una "prueba de vida" de que el despliegue funcionó correctamente. A medida que continúes trabajando en tu proyecto, el sitio desplegado se actualizará cada vez que el equipo haga merge a un pull request en la rama main. También tienes la opción de establecer el despliegue en una rama diferente, aunque es más común desplegar desde la rama main.

Puedes comprar un nombre de dominio, aunque esto no es un requisito.

## Preparación de la presentación

Tu equipo debe practicar su presentación antes del día de la presentación final. Por lo general, esto lo programan los instructores. Durante la presentación de práctica, los instructores proporcionarán feedback constructivo sobre el flujo de la presentación y la apariencia de la aplicación.

Crea diapositivas/power point para tu presentación. Haz que las diapositivas iniciales sean una introducción de tu equipo, seguidas de una diapositiva para iniciar tu demostración, luego una diapositiva final para hacer una pregunta.

Decidan qué computadora van a utilizar durante la presentación y lleven esa computadora a la sesión de práctica. Asegúrense de tener los cables o adaptadores necesarios. Prueben esta misma computadora en el espacio principal del evento. También prueben con una computadora de respaldo, por si acaso.

La presentación debe durar aproximadamente 15 minutos, incluyendo un tiempo al final para preguntas. Presenten desde el sitio desplegado. **Cada miembro debe presentarse con su pitch personal. Ya lo han practicado, ¡ahora úsenlo!** La página "About Us" es un buen fondo para esta parte de la presentación.

Cada miembro del equipo debe hablar en alguna parte. Está bien utilizar fichas si estás nervioso y estás pensando que te vas a olvidar de lo que vas a hablar. Algunas de las áreas a hablar incluyen:

- Una introducción al proyecto y a la descripción del problema, incluyendo la solución propuesta por el equipo
- Una demostración de la funcionalidad de la aplicación
- El enfoque del equipo para la planificación y su comunicación a lo largo de la semana
- Uno o dos obstáculos técnicos y cómo superaron esos obstáculos
- Una parte de la aplicación final de la que cada miembro del equipo se sienta particularmente orgulloso

En general, si bien está bien mostrar una pequeña cantidad (~3 líneas) de código para mostrar una funcionalidad interesante en su presentación, no muestren grandes cantidades de código o archivos completos durante la presentación a menos que el público solicite verlo. Sin embargo, tengan un editor de código abierto por si acaso.

Además de la sesión de práctica programada, se incentiva que el equipo continúe practicando por su cuenta. Monitoreen el tiempo y ajusten su presentación en consecuencia. Practiquen con el micrófono (o sosteniendo algo) para sentirse cómodos sosteniéndolo y practiquen pasar el micrófono entre los miembros del equipo a medida que cambian de rol.

El código de vestimenta apropiado es casual de negocios - ni demasiado formal ni demasiado casual.

Estos son algunos otros consejos para una presentación exitosa:

- Cuéntennos al principio de la presentación qué puede hacer la aplicación y expliquen claramente qué los inspiró a crear esa aplicación.
- Practiquen la demostración/guía de la aplicación. A medida que ingresen inputs de ejemplo, planeen lo que van a escribir; realmente descarrila una presentación cuando alguien dice con el micrófono "así que aquí ingresas tu nombre" y la persona que escribe en la computadora está tratando de pensar en un nombre para ingresar.
- Asegúrense de mantener un tono positivo sobre lo que puede hacer la aplicación, especialmente en la primera parte de la presentación. Hagan que esto sea lo que dirían sobre tu proyecto en una entrevista. Eviten contar chistes autocríticos; necesitan practicar hablar de esta aplicación de una forma profesional y como si fuera un pitch.
- El momento adecuado para hablar de las cosas que no llegaron a terminar como "logros adicionales" es hacia el final de la presentación. Este también es el momento adecuado para describir los obstáculos técnicos que enfrentaron durante la semana, y es el momento en que está bien hacer chistes autocríticos.
- Otra forma útil de pensar en esta presentación es que es una oportunidad para que compartan lo que aprendieron esta semana con sus compañeros de clase. Si utilizaron una nueva tecnología o una nueva librería, ¿cómo les fue? ¿Tus compañeros de clase también deberían usar esa librería o deberían mantenerse alejados? ¿Qué les hubiera gustado saber antes de empezar un proyecto como este?
- Hablen con claridad y no utilicen jergas ni groserías. Tómenselo en serio y sean profesionales.

## Calificación

Las calificaciones de cada miembros del equipo se basarán en el esfuerzo individual y el mérito técnico del proyecto.

El esfuerzo individual se califica en base a los enlaces a los commits y los pull requests que demuestran tus contribuciones, tal como se enviaron en Canvas en los informes diarios de la semana del proyecto.

El mértio técnico se califica de acuerdo al siguiente criterio:

- Uso bueno y adecuado de HTML
  - Estructura clara, legible y eficiente
  - Uso del lenguaje de marcado semántico cuando sea posible

- Uso bueno y adecuado de CSS
  - Estilos claros, legibles y eficientes
  - Layout de páginas adecuado para escritorio
  - Estructura de archivos bien organizada
  - Al menos una animación CSS
  - Puntuación de Lighthouse entre 80-100

- Uso bueno y adecuado de JavaScript
  - Código claro, legible y eficiente
  - Uso de modelos de dominio para encapsular datos y comportamientos, como objetos y constructores
  - Responde a los eventos del usuario para recibir/procesar el input del usuario y mostrar contenido nuevo al usuario
  - No contiene código innecesario o comentado

- Generalmente útil y funcional
  - Funciona como se espera, sin errores
  - Tiene al menos tres páginas distintas con navegación clara, una de las cuales debe ser una página "About Us"
  - Tiene al menos dos páginas que aceptan y procesan el input del usuario
  - El state persiste entre actualizaciones de las páginas
  - Despliegue en internet por medio de GitHub Pages

Este documento se inspiró y se adaptó a partir de [este conjunto de guías para proyectos](https://github.com/elsewhencode/project-guidelines).
