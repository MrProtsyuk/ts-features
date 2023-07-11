// 1

// colon tells TS that the variable apple will only ever use a number type
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

// these too have a type that is the same as the value
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// 2

// Array; first brackets are not the array, they tell typescript that this value is going to be an array. Hence the second brackets with the colors inside
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [2, 245, 23];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object Literal; declaring a variable and assigning it an object with X and Y and we add type annotation that tells TS that X and Y have a type
let point: { x: number; y: number } = {
  x: 10,
  y: 23,
};

// 3

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations

// 1. Function that returns any type
const json = '{"x": 10, "y":20}';
// added type annotations to coordinates
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. When we declare a var on one line but initialize it later
let words = ["red", "green", "blue"];
// added type annotation; can be writen as "let foundWord = false;"
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3. When type cannot be easily inferred correctly
let numbers = [-10, -12, 3];
// added in an annotation of boolean OR number because TS cannot distinguish
let numberAboveZero: boolean | number;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
