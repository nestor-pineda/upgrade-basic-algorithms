"use strict";

// #1: Variables

let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

// #2: Variables avanzadas
// 2.1
const character = {
  name: "Jack Sparrow",
  age: 10,
};
character.age = 25;

// 2.2
const firstName = "Jon";
const lastName = "Snow";
const age = 24;
console.log(`Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`);

// 2.3
const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };
console.log(toy1.price + toy2.price);

// 2.4
let globalBasePrice = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };
globalBasePrice = 25000;
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

// #3: Operadores
// 3.1
alert(10 * 5);

// 3.2
alert(10 / 2);

// 3.3
alert(15 / 9);

// 3.4
y = 10;
z = 5;
x = y + z;
console.log(x);

// 3.5
x = y * z;
console.log(x);
