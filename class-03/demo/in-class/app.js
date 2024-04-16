// Crear un puntaje:
let score = 0;

function preguntaUno() {
  console.log("Pregunta 1");
}

function preguntaDos() {
  console.log("Pregunta 2");
}

// 4 oportunidades para responder esta pregunta, sino, le doy la respuesta.
// usamos while:
function preguntaSeis() {
  let years;
  let attempts = 0;

  while (years != 33 && attempts < 4) {
    years = prompt("Cual es mi edad?");
    if (years < 33) {
      console.log("Muy bajo");
    } else if (years > 33) {
      console.log("Muy alto");
    } else {
      console.log("CORRECTO, adivinaste");
      score++;
    }
    attempts++; // ESTO PREVIENE EL INFINITO.
  }
  console.log("Mi edad es 33 años.");
}

function preguntaSiete() {
  let coloresFavoritos = ["rojo", "negro", "verde"];
  let color;
  let attempts = 1;
  while (attempts < 7) {
    color = prompt("Adivina mi color favorito:");
    color = color.toLowerCase();
    // Vamos a iterar el arreglo para comparar con la respuesta del usuario:
    for (let i = 0; i < coloresFavoritos.length; i++) {
      if (color == coloresFavoritos[i]) {
        // Si adivinó, incrementamos los attempts para que el while se rompa.
        // Usamos break, para dejar de comparar.
        console.log("CORRECTO, adivinaste");
        score++;
        attempts = 6; // Romper el while.
        break; // Rompe el for.
      } else {
        console.log(color, "INCORRECTO, intento " + attempts + " de 6");
      }
    }
    attempts++; // ESTO PREVIENE EL INFINITO.
  }

  console.log("Mis colores favoritos son: ", coloresFavoritos);
}

preguntaUno();
preguntaDos();
// 3, 4, 5
preguntaSeis();
preguntaSiete();

console.log("Tu score es: ", score);
