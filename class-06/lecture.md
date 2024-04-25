# El DOM, Modelos de dominio e Introducción a los objetos

## ¿Qué es un objeto?
    - Algo que contiene atributos y características.
    - Se parece a un array pero tiene algunas diferencias.
        - La principal diferencia es que puedo almacenar diversos tipos de datos como propiedades de un objeto.
        - Mientras que NO ES ACONSEJABLE almacenar diversos tipos de datos en un arreglo.
    - Una entidad que tiene atributos y características que engloban su existencia.
    - Permite almacenar datos (estilo diccionario <key: value>).
    - Una entidad que ayudan a representar datos que tienen relacion entre ellos.

    - Un objeto es una colección de datos relacionados y funcionalidades que generalmente consta de algunas variables.
    - Tienen atributos (propiedades) y funciones (métodos).
    - En JavaScript, un objeto es una entidad que contiene propiedades que describen el estado y comportamiento del objeto. Las propiedades que describen el comportamiento también se llaman métodos. Estos "objetos" tienen el propósito de imitar objetos reales como un carro, una persona, un gato, etc.

    - Es una entidad que contiene propiedades y funcionalidades.

    - Hay 2 formas de crear objetos en Javascript:
        - Objetos Literales (HOY)
        - Objetos de Clase

## ¿Qué es el DOM?
- Document Object Model.
- Es la referencia que tenemos desde Javascript para poder acceder al documento HTML al cuál estamos vinculados.
- A través del objeto `document` podemos acceder a cada nodo HTML y sus respectivas propiedades y funciones.


## Ejemplo del monitor (abstracción):
- Color de marco (negro).
- Resolución min de la pantalla (480 x 640px).
- Resolución actual de la pantalla (1920 x 1080px).
- Resolución max de la pantalla (2560 x 1920px).
- Tamaño / inches (15")
- Frecuencia de refresco / hz (144hz).
- Tipo de pantalla (LED, LCD, Retina).
- Tipo de acoplamiento (interna / externo).
- Encendido (on / off).
- Brillo (nits... o es lumens)

### Métodos del monitor:
- mostrar();
- subirBrillo();
- bajarBrillo();
- subirContraste();
- bajarContraste();
- prender();
- apagar();
- suspender();



