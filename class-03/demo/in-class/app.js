// Crear un puntaje:
let score = 0;

function preguntaUno() {
  
  let questionOne = prompt('Me gusta volar?');
  
  if (questionOne.toLowerCase() === 'si' || questionOne.toLowerCase() === 's') {
    console.log('Excelente tu respuesta es correcta');
    alert('Excelente tu respuesta es correcta');
    score++;
  } else {
    console.log('Lo siento, tu respuesta es incorrecta');
    alert('Lo siento, tu respuesta es incorrecta ');
  }
}

function preguntaDos() {
  
  let questionTwo = prompt('Me gusta los perros?');
  
  if (questionTwo.toLowerCase() === 'si' || questionTwo.toLowerCase() === 's') {
    console.log('Excelente tu respuesta es correcta');
    alert('Excelente tu respuesta es correcta');
    score++;
  } else {
    console.log('Lo siento, tu respuesta es incorrecta');
    alert('Lo siento, tu respuesta es incorrecta ');
}
}

function preguntaTres(){

  let questionThree = prompt('Me gusta dibujar?');
  
  if (questionThree.toLowerCase() === 'no' || questionThree.toLowerCase() === 'n') {
    console.log('Excelente tu respuesta es correcta');
    alert('Excelente tu respuesta es correcta');
    score++;
  } else {
    console.log('Lo siento, tu respuesta es incorrecta');
    alert('Lo siento, tu respuesta es incorrecta ');
}
}

function preguntaCuatro(){
  let questionFour = prompt('Me gusta dibujar?');
  
  if (questionFour.toLowerCase() === 'no' || questionFour.toLowerCase() === 'n') {
    console.log('Excelente tu respuesta es correcta');
    alert('Excelente tu respuesta es correcta');
    score++;
  } else {
    console.log('Lo siento, tu respuesta es incorrecta');
    alert('Lo siento, tu respuesta es incorrecta ');
} 
}

function preguntaCinco(){
  let questionFive = prompt('Me gusta el futbol?');
  
  if (questionFive.toLowerCase() === 'no' || questionFive.toLowerCase() === 'n') {
    console.log('Excelente tu respuesta es correcta');
    alert('Excelente tu respuesta es correcta');
    score++;
  } else {
    console.log('Lo siento, tu respuesta es incorrecta');
    alert('Lo siento, tu respuesta es incorrecta ');
} 
}


// 4 oportunidades para responder esta pregunta, sino, le doy la respuesta.
// usamos while:
function preguntaSeis() {
  let years;
  let attempts = 0;

  while (years != 27 && attempts < 4) {
    years = prompt("Cual es mi edad?");
    if (years < 27) {
      console.log("Muy bajo");
    } else if (years > 27) {
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
  let musicaFavoritas = ["rock", "salsa", "hiphop"];
  let color;
  let attempts = 1;
  while (attempts < 7) {
    color = prompt("Adivina mi musica favorita:");
    color = color.toLowerCase();
    // Vamos a iterar el arreglo para comparar con la respuesta del usuario:
    for (let i = 0; i < musicaFavoritas.length; i++) {
      if (color == musicaFavoritas[i]) {
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
