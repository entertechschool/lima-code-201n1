// const task = {
//   text: "",
//   isDone: false,
//   dueDate: "30/04",
//   priority: 1,
// };

// Class Objects:
function Task(text, dueDate) {
  this.text = text;
  this.dueDate = dueDate;
}

// const tarea1 = new Task("Tarea 1", "29/Abril");
// const tarea2 = new Task("Tarea 2", "30/Abril");
// const tarea3 = new Task("Tarea 3", "01/Mayo");

// console.log(tarea1);

// const tarea5 = {
//   text: "Tarea 5",
//   dueDate: "05/Mayo",
// };

// console.log(tarea5);

// const tareas = [tarea1, tarea2, tarea3];

// console.log(tareas);

// DOM:

// Obtener la section donde renderizaremos las tareas:
const sectionListTasks = document.getElementById("list");
const ulTasks = document.createElement("ul");

// Evento del clic al botón y del ENTER en el input:
const addButton = document.querySelector("#form button");
const addInput = document.querySelector("#form input");

addButton.addEventListener("click", function () {
  console.log("Add button: Click!");
  addTask();
});

addInput.addEventListener("keydown", function (eventoTeclaPresionada) {
  if (eventoTeclaPresionada.code === `Enter`) {
    console.log("Enter presionado");
    addTask();
  }
});

function addTask() {
  if (addInput.value == "" || addInput.value == undefined) {
    return;
  }
  console.log("Agregando tarea nueva: " + addInput.value);
  const task = new Task(addInput.value, "30/Abril");

  addInput.value = "";

  const liTask = document.createElement("li");
  liTask.textContent = task.text;
  ulTasks.appendChild(liTask);
}

sectionListTasks.appendChild(ulTasks);
