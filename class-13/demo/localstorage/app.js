function Persona(name, age) {
  this.name = name;
  this.age = age;
}

const personas = [];

const personasLocalStorage = localStorage.getItem("personas");
if (personasLocalStorage) {
  const personasArray = JSON.parse(personasLocalStorage);
  for (let index = 0; index < personasArray.length; index++) {
    personas.push(personasArray[index]);
  }
}

const buttonCreate = document.getElementById("buttonCreate");

buttonCreate.addEventListener("click", function () {
  const persona = new Persona("Random", 40);
  personas.push(persona);
  console.log(personas);
  //   Agregando a Local Storage:
  //   JSON = Javascript Object Notation.
  localStorage.setItem("personas", JSON.stringify(personas));
});
