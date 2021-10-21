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

// #4: Arrays
// 4.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

// 4.2
let myArray1 = avengers.indexOf("HULK");
avengers[myArray1] = "IRONMAN";
console.log(avengers[0]);

// 4.3
alert(avengers.length);

// 4.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[4]);

// 4.5
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);
const arrayLength = rickAndMortyCharacters.length;
console.log(rickAndMortyCharacters[arrayLength - 1]);

// 4.6
console.log(rickAndMortyCharacters);
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);

// #5: Condicionales
// 5.1
const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number1 === 10) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 === 2) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 === 2 && number1 === 10) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 === 20 || number1 === 10) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

// #6: Bucles
// 6.1
let numero = "";
for (let i = 0; i < 10; i++) {
  numero += i;

  // 6.2
  if (i === 2) {
    console.log(i);
  }
}

console.log(numero);

// 6.3

const frase1 = "Intentando dormir";
const frase2 = "Dormido!";
let number = "";

for (let i = 0; i < 10; i++) {
  number = i;
  if (number < 9) {
    console.log(frase1);
  } else {
    console.log(frase2);
  }
}
