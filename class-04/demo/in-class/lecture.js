function iterandoRespuestas() {
  let respuestaCorrecta = "5";
  let respuestaUsuario;
  let intentos = 1;
  while (respuestaUsuario != respuestaCorrecta) {
    respuestaUsuario = prompt("Que numero estoy pensando?");
    intentos++;
    if (intentos > 3) {
      alert("Nunca adivinaste, mi numero es el " + respuestaCorrecta);
      return;
    }
  }
}

iterandoRespuestas();
