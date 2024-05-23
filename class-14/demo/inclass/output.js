"use strict";

function showCats(event) {
  console.log("show cats");
  for (let i = 0; i < state.allCats.length; i++) {
    const cat = state.allCats[i];
    const liCat = cat.render();
    list_cats.appendChild(liCat);
  }
}

button_show_cats.addEventListener("click", showCats);
