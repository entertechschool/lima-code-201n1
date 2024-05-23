"use strict";

const state = {
  allCats: [],
};

const input_catname = document.getElementById("input_catname");
const form_cat = document.getElementById("form_cat");
const list_cats = document.getElementById("list_cats");
const button_show_cats = document.getElementById("button_show_cats");

function Cat(name) {
  this.name = name;
}

Cat.prototype.render = function () {
  const liElement = document.createElement("li");
  liElement.textContent = this.name;
  return liElement;
};

// Revisar si existen gatos en Local Storage:
if (localStorage.getItem("cats")) {
  const cats = JSON.parse(localStorage.getItem("cats"));
  for (let i = 0; i < cats.length; i++) {
    const newCat = new Cat(cats[i].name);
    state.allCats.push(newCat);
  }
}
