// Values and Variables

let country = "Czechia";
let continent = "Europe";
let population = 10;

console.log(country, continent, population);

// Data Types

let isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

// let, const and var

language = "Czech";

// Basic Operators

console.log(population / 2);
population++;
console.log(population);
population--;
console.log(population > 6);
console.log(population < 33);

const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description1);

// Coding Challange #1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherMBI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherMBI);

// Strings and Template Literals

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description);

// Taking Decisions: if / else Statements

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

// Coding Challange #2

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}!`);
}

// Type Conversion and Coercion

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// Equality Operators: == vs. ===
/*
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}
console.log(numNeighbours);
*/

// Logical Operators

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

// Coding Challange #3

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy.");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy.");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy.");
} else {
  console.log("No one wins the trophy");
}

// The switch Statement

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  default:
    console.log("Great language too");
}

// The Conditional (Ternary) Operator

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);

// Coding Challange #4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
