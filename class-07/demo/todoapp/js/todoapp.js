// Caputar el click del boton add:

const inputText = document.getElementById("inputText");
const inputDueDate = document.getElementById("inputDueDate");

function Task(text, dueDate) {
  this.text = text;
  this.dueDate = dueDate;
  // Se creará un método generateId por cada instancia creada.
  this.generatedId = function () {
    this.id = Math.random();
  };
}

Task.prototype.generatedIdPrototype = function () {
  this.idPrototype = Math.random();
};

const buttonAdd = document.getElementById("buttonAdd");
buttonAdd.onclick = function () {
  if (inputText.value == "" || inputDueDate.value == "") {
    return;
  }
  const task = new Task(inputText.value, inputDueDate.value);
  task.generatedId();
  task.generatedIdPrototype();
  console.log(task);
};
