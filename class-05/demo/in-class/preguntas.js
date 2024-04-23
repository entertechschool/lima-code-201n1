// let preguntas = ["Me llamo Bruno?", "Me dicen Batman?", "Tengo 45 años?"];

// let respuestasCorrectas = ["si", "si", "no"];

// let intentosPorPregunta = [1, 1, 4];

// let preguntas = [
//   ["Me llamo Bruno? [ si / no ]", "si", 1],
//   ["Me dicen Batman? [ si / no ]", "si", 3],
//   ["Cuantos años tengo? [ # ]", "33", 5],
// ];

let preguntas = [
  {
    pregunta: "Me llamo Bruno? [ si / no ]",
    respuestaCorrecta: "si",
    intentosPermitidos: 1,
  },
  {
    pregunta: "Me dicen Batman? [ si / no ]",
    respuestaCorrecta: "si",
    intentosPermitidos: 1,
  },
  {
    pregunta: "Cuantos años tengo? [ # ]",
    respuestaCorrecta: [33, 34, 35],
    intentosPermitidos: 5,
  },
];

function hacerPregunta(pregunta, respuestaCorrecta, intentosPermitidos) {
  let intentosRealizados = 0;
  let respuestaUsuario = "";
  while (
    respuestaUsuario.toLowerCase() !== respuestaCorrecta &&
    intentosRealizados < intentosPermitidos
  ) {
    respuestaUsuario = prompt(pregunta + ":");
    if (respuestaUsuario.toLowerCase() === respuestaCorrecta) {
      console.log("Intento " + intentosRealizados + " / RESPUESTA CORRECTA");
      break;
    } else {
      console.log(
        "Intento " +
          intentosRealizados +
          " / RESPUESTA INCORRECTA" +
          "/ respuesta correcta: " +
          respuestaCorrecta
      );
    }
    intentosRealizados++;
  }
}

for (let i = 0; i < preguntas.length; i++) {
  let pregunta = preguntas[i].pregunta;
  let respuestasCorrecta = preguntas[i].respuestaCorrecta;
  let intentosPorPregunta = preguntas[i].intentosPermitidos;
  hacerPregunta(pregunta, respuestasCorrecta, intentosPorPregunta);
}
