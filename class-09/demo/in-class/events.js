// Paso 1: A través de la facultad del DOM, atrapo al elemento:
const button_start = document.getElementById("button_start");
const button_end = document.getElementById("button_end");
const button_pause = document.getElementById("button_pause");

const main = document.querySelector("main");

// Paso 2: Le agrego un EventListener:
button_start.addEventListener("click", consoleClick);
button_start.addEventListener("click", start);

button_end.addEventListener("click", consoleClick);
button_end.addEventListener("click", end);

button_pause.addEventListener("click", function () {
  if (button_pause.textContent === "Pause") {
    button_start.removeEventListener("click", start);
    button_end.removeEventListener("click", end);
    button_pause.textContent = "Play";
  } else {
    button_start.addEventListener("click", start);
    button_end.addEventListener("click", end);
    button_pause.textContent = "Pause";
  }
});

function consoleClick(x) {
  console.log(x.target.textContent);
  console.log("Acabo de recibir un click: " + new Date().getMilliseconds());
}

const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getCharacter(index) {
  return hexCharacters[index];
}

function generateColor() {
  let hexColorRep = "#";

  for (let index = 0; index < 6; index++) {
    const randomPosition = Math.floor(Math.random() * hexCharacters.length);
    hexColorRep += getCharacter(randomPosition);
  }
  return hexColorRep;
}

function start() {
  console.log("Iniciando");
  const square = document.createElement("div");
  square.style.setProperty("width", "40px");
  square.style.setProperty("height", "40px");
  square.style.setProperty("background-color", generateColor());
  main.append(square);
}

function end() {
  console.log("Terminando");
  const lastSquare = main.querySelector("div:last-child");
  main.removeChild(lastSquare);
}

// Funciones anónimas: funciones que NO tienen nombre.

// Funciones Callback:
// Son funciones que se pueden 'pasar' como argumentos a otra funcion.
// La función que reciba como parámetro a otra función, se llama High Order Function.
function crearPersona(nombre, funcionCallback) {
  console.log(`Nombre de la persona: ${nombre}`);
  console.log(`Retrasando el callback: 1`);
  console.log(`Retrasando el callback: 2`);
  console.log(`Retrasando el callback: 3`);
  console.log(`Retrasando el callback: 4`);
  console.log(`Retrasando el callback: 5`);
  funcionCallback(nombre); // Aquí SI se invoca, porque uso (parentesis).
}

function saludar(text) {
  console.log("Saludando... " + text);
}

function despedir(text) {
  console.log("Despidiendo... " + text);
}

function algebra() {
  console.log(`2 + 2 = 4`);
}

// crearPersona("Bruno", saludar);
// crearPersona("Bruno", despedir);
// crearPersona("Bruno", algebra);

// Cómo se invoca (call) a una function:
