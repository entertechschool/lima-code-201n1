/* eslint-disable indent */

"use strict";

function Location(
  name,
  minCustomerPerHour,
  maxCustomerPerHour,
  avgCookiesPerCustomer,
  cookiesPerHour
) {
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
}

Location.prototype.estimate = function () {
  this.cookiesPerHour = estimateSales(this);
};

Location.prototype.renderRow = function () {
  const tr = document.createElement("tr");
  const tdLocation = document.createElement("td");
  tdLocation.textContent = this.name;
  tr.appendChild(tdLocation);
  for (let i = 0; i < horasAtencion.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }
  return tr;
};

const seattleLocation = new Location("Seattle", 23, 65, 6.3);
const tokyoLocation = new Location("Tokyo", 3, 24, 1.2);
const dubaiLocation = new Location("Dubai", 11, 38, 3.7);
const parisLocation = new Location("Paris", 20, 38, 2.3);
const limaLocation = new Location("Lima", 2, 16, 4.6);

const horasAtencion = [
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const locations = [
  seattleLocation,
  tokyoLocation,
  dubaiLocation,
  parisLocation,
  limaLocation,
];

function randomNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function estimateSales(location) {
  const sales = [];
  for (let i = 0; i < horasAtencion.length; i++) {
    const numClientes = randomNumero(
      location.minCustomerPerHour,
      location.maxCustomerPerHour
    );
    const numHoras = Math.ceil(numClientes * location.avgCookiesPerCustomer);
    sales.push(numHoras);
  }
  return sales;
}

const table = document.querySelector("section#tabla table");
const thead = table.querySelector("thead");
const tbody = table.querySelector("tbody");

function renderCabeceras() {
  const tr = document.createElement("tr");
  const thLocation = document.createElement("th");
  thLocation.textContent = "Locations";
  tr.appendChild(thLocation);
  for (let i = 0; i < horasAtencion.length; i++) {
    const th = document.createElement("th");
    th.textContent = horasAtencion[i];
    tr.appendChild(th);
  }
  thead.appendChild(tr);
}

function renderTiendas() {
  for (let i = 0; i < locations.length; i++) {
    locations[i].estimate();
    const trow = locations[i].renderRow();
    tbody.appendChild(trow);
  }
}

function ejecutar() {
  renderCabeceras();
  renderTiendas();
}

ejecutar();
