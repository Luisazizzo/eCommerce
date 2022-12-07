import products from "./products.js";

const carrello = [];

const cart = document.querySelector(".cart");
const cartBox = document.querySelector(".box");

cart.textContent = "Prodotti nel carrello: " + carrello.length;

cart.addEventListener("click", () => {
  cartBox.classList.toggle("show");
});

const tecnologia = products.filter(
  (item) => item.category === "smartphones" || item.category === "laptops"
);

const beauty = products.filter(
  (elemento) =>
    elemento.category === "fragrances" || elemento.category === "skincare"
);

const home = products.filter(
  (elemento) =>
    elemento.category === "groceries" || elemento.category === "home-decoration"
);

const cardCreator = (Arraylist, divId) => {
  const categorySection = document.querySelector(divId);

  Arraylist.forEach((elemento) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.setAttribute("src", elemento.thumbnail);
    img.setAttribute("alt", elemento.description);
    card.appendChild(img);

    const thumbDiv = document.createElement("div");
    thumbDiv.className = "thumb";
    card.appendChild(thumbDiv);

    elemento.images.forEach((imgUrl) => {
      const imgThumb = document.createElement("img");
      imgThumb.setAttribute("src", imgUrl);
      imgThumb.setAttribute("alt", elemento.description);
      thumbDiv.appendChild(imgThumb);
    });

    const h3 = document.createElement("h3");
    h3.textContent = elemento.title;
    card.appendChild(h3);

    const marca = document.createElement("p");
    marca.className = "marca";
    marca.textContent = elemento.brand;
    card.appendChild(marca);

    const prezzo = document.createElement("p");
    prezzo.className = "prezzo";
    prezzo.textContent = "€ " + elemento.price;
    card.appendChild(prezzo);

    const valutazione = document.createElement("p");
    valutazione.className = "valutazione";
    valutazione.textContent = elemento.rating;
    card.appendChild(valutazione);

    const button = document.createElement("button");
    button.textContent = "Aggiungi al carrello";

    button.addEventListener("click", () => {
      carrello.push(elemento);
      cart.textContent = "Prodotti nel carrello: " + carrello.length;
      aggiungiAlCarrello();
    });

    card.appendChild(button);

    categorySection.appendChild(card);
  });
};

cardCreator(tecnologia, "#tecnologia");
cardCreator(beauty, "#beauty");
cardCreator(home, "#home");

const ulCarrello = document.createElement("ul");
cartBox.appendChild(ulCarrello);

const aggiungiAlCarrello = () => {
  ulCarrello.textContent = "";
  carrello.forEach((item) => {
    const liCarrello = document.createElement("li");
    liCarrello.textContent = item.title;
    ulCarrello.appendChild(liCarrello);
  });
};
