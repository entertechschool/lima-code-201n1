"use strict";

function handleFormCat(event) {
  event.preventDefault();
  console.log("submit!");
  const catname = input_catname.value;
  const newCat = new Cat(catname);
  state.allCats.push(newCat);
  localStorage.setItem("cats", JSON.stringify(state.allCats));
  console.log(state.allCats);
  form_cat.reset();
}

form_cat.addEventListener("submit", handleFormCat);
