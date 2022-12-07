import products from "./products.js";

const mioArray = [123, 345, 66, 34];

// il metodo map() ritorna un nuovo array
// const nuovoArray = mioArray.map((num, index) => {
//   if (index === 2) {
//     return num + 100;
//   } else {
//     return num;
//   }
// });

const nuovoArray = mioArray.map((num, index) => num + 100);

console.log(nuovoArray);

const miaFunzione = (num) => {
  console.log("conosole dalla fuzione: " + (num + 100));
};

// mentre il metodo foreach() non ritorna nulla
mioArray.forEach((numero, index) => {
  miaFunzione(numero);
});

// metodo filter()
const tecnologia = products.filter(
  (item) => item.category === "smartphones" || item.category === "laptops"
);

const beauty = products.filter(
  (elemento) =>
    elemento.category === "fragrances" || elemento.category === "skincare"
);

const piuEconomici = products.filter((elemento) => elemento.price < 30);

console.log(piuEconomici);
