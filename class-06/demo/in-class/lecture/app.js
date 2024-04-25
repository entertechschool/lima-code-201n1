// Creando objetos literales:
// 1. La definición es igual a la de una variable cualquier:

let monitor = {
  colorMarco: "negro",
  frecuencia: 144,
  luzIndicadora: false,
  resolucionesSoportadas: ["1920x1080", "480x640", "..."],
  frecuenciasSoportadas: {
    gamer: 144,
    developer: 100,
    estandar: 60,
  },
  encender: function () {
    if (!this.luzIndicadora) {
      console.log("Estoy prediendome...");
    }
    this.luzIndicadora = true;
  },
  apagar: function () {
    if (this.luzIndicadora) {
      console.log("Estoy apagandome...");
    }
    this.luzIndicadora = false;
  },
};

// console.log("monitor: ", monitor);

// 2. Para acceder a una propiedad usamos la NOTACION DEL PUNTO (dot notation).

// console.log("Frecuencia del Monitor: ", monitor.frecuencia);
// console.log("Frecuencias Soportadas: ", monitor.frecuenciasSoportadas);

// 3. Para acceder a una funcion también usamos la NOTACION DEL PUNTO (dot notation).

// console.log("monitor.luzIndicadora: ", monitor.luzIndicadora);
// console.log("Intentando encender:", monitor.encender());
// console.log("monitor.luzIndicadora: ", monitor.luzIndicadora);
// console.log("Intentando apagar:", monitor.apagar());
// console.log("monitor.luzIndicadora: ", monitor.luzIndicadora);

// Valores primitivos: String, numeric, boolean, null, undefined
let a = "Hola";
let b = "Hola";
console.log(a == b); // true

// Valores por referencia: Array y otros Objetos.
let x = ["hola"];
let y = ["hola"];
console.log(x == y); //

// DOM

// Acceder al document, y capturar en una variable al primer h1 que encuentre:
const h1 = document.getElementById("titulo");

h1.textContent = "Hola soy Angel Paz";

const parrafo = document.querySelector("p");
console.log(parrafo.textContent);

const footer = document.querySelector("footer");
const parrafo_del_footer = footer.querySelector("p");
console.log(parrafo_del_footer.textContent);

console.log(parrafo_del_footer); // Para ver qué propiedaes tiene
console.log(parrafo_del_footer.style.getPropertyValue("color"));
parrafo_del_footer.style.color = "red";
console.log(parrafo_del_footer.style.getPropertyValue("color"));
