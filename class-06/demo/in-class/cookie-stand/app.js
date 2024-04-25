function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const seattle = {
  locationName: "Seattle",
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesByCustomer: 6.3,
  cookiesPerHour: [],
  estimate: function () {
    let random = getRandomArbitrary(
      this.minCustomersPerHour,
      this.maxCustomersPerHour
    );
    this.cookiesPerHour.push(Math.round(random * this.avgCookiesByCustomer));
  },
};

const lima = {
  locationName: "Lima",
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesByCustomer: 4.6,
  cookiesPerHour: [],
  estimate: function () {
    let random = getRandomArbitrary(
      this.minCustomersPerHour,
      this.maxCustomersPerHour
    );
    this.cookiesPerHour.push(Math.round(random * this.avgCookiesByCustomer));
  },
};

const paris = {
  locationName: "Paris",
  minCustomersPerHour: 20,
  maxCustomersPerHour: 28,
  avgCookiesByCustomer: 2.3,
  cookiesPerHour: [],
  estimate: function () {
    let random = getRandomArbitrary(
      this.minCustomersPerHour,
      this.maxCustomersPerHour
    );
    this.cookiesPerHour.push(Math.round(random * this.avgCookiesByCustomer));
  },
};

let locations = [seattle, paris, lima];

for (let i = 0; i < locations.length; i++) {
  const location = locations[i];

  for (let i = 0; i < 15; i++) {
    location.estimate();
  }

  const section = document.createElement("section");
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");

  for (let i = 0; i < location.cookiesPerHour.length; i++) {
    const li = document.createElement("li");
    li.textContent = location.cookiesPerHour[i] + " galletas";
    ul.append(li);
  }

  h2.textContent = location.locationName;

  section.append(h2);
  section.append(ul);

  section.id = location.locationName.toLowerCase();

  const main = document.querySelector("main");
  main.append(section);
}
