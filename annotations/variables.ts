// colon tells TS that the variable apple will only ever use a number type
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

// these too have a type that is the same as the value
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

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
