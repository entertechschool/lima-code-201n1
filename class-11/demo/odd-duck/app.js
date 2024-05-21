const rounds = document.getElementById("rounds");
const container = document.getElementById("container");
const results = document.getElementById("results");

let chart = null;

let currentRounds = 0;
const maxRounds = 5;

function Product(imgPath) {
  this.imgPath = "img/" + imgPath;
  this.name = imgPath.replace(".jpg", "");
  this.views = 0;
  this.clicks = 0;
}

Product.prototype.addClick = function () {
  this.clicks++;
  console.log(`views: ${this.views} / clicks: ${this.clicks}`);
};

Product.prototype.renderImg = function () {
  const imgElement = document.createElement("img");
  imgElement.src = this.imgPath;
  this.views++;
  const thisProduct = this;
  imgElement.addEventListener("click", function (event) {
    thisProduct.addClick();
    displayProducts();
  });
  return imgElement;
};

Product.prototype.renderElement = function () {
  const liElement = document.createElement("li");
  liElement.textContent =
    this.name + " / views: " + this.views + " / clicks: " + this.clicks;
  return liElement;
};

// Instancias de productos:
const product1 = new Product("bag.jpg");
const product2 = new Product("banana.jpg");
const product3 = new Product("bathroom.jpg");
const product4 = new Product("boots.jpg");
const product5 = new Product("breakfast.jpg");
const product6 = new Product("bubblegum.jpg");
const product7 = new Product("cthulhu.jpg");
const product8 = new Product("chair.jpg");
const product9 = new Product("dog-duck.jpg");
const product10 = new Product("dragon.jpg");
const product11 = new Product("pen.jpg");
const product12 = new Product("pet-sweep.jpg");
const product13 = new Product("scissors.jpg");
const product14 = new Product("shark.jpg");
const product15 = new Product("tauntaun.jpg");
const product16 = new Product("unicorn.jpg");
const product17 = new Product("water-can.jpg");
const product18 = new Product("wine-glass.jpg");

const products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
];

function getRandomIndex() {
  return Math.floor(Math.random() * products.length);
}

function getRandomProducts(productsQty = 3) {
  const randomProducts = [];
  for (let i = 0; i < productsQty; i++) {
    let randomProduct = products[getRandomIndex()];
    while (
      randomProducts.find((product) => product.name === randomProduct.name)
    ) {
      randomProduct = products[getRandomIndex()];
    }
    randomProducts.push(randomProduct);
  }
  return randomProducts;
}

function displayProducts() {
  container.innerHTML = "";

  if (currentRounds >= maxRounds) {
    return displayResults();
  }

  const renderedProducts = getRandomProducts();

  for (let i = 0; i < renderedProducts.length; i++) {
    const imgElement = renderedProducts[i].renderImg();
    container.appendChild(imgElement);
  }

  currentRounds++;
  rounds.textContent = currentRounds;
}

function displayResults() {
  const h2 = document.createElement("h2");
  h2.textContent = "Resultados:";
  const ul = document.createElement("ul");
  for (let i = 0; i < products.length; i++) {
    ul.appendChild(products[i].renderElement());
  }
  container.appendChild(h2);
  container.appendChild(ul);

  renderChart();
}

/* global Chart */
function renderChart() {
  const ctx = document.getElementById("canvas").getContext("2d");

  const productVotes = [];
  const productTitles = [];
  const productViews = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    productVotes.push(product.clicks);
    productTitles.push(product.name);
    productViews.push(product.views);
  }

  chart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: productTitles,
      datasets: [
        {
          label: "# of Votes",
          data: productVotes,

          borderWidth: 1,
        },
        {
          label: "# of views",
          data: productViews,

          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              stepSize: 1,
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
    },
  });
}

displayProducts();
