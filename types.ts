// typescript will automatically generate code extensions for primative types
const today = new Date();
// EX:
today.getMonth();

// although no types are defined, typescript recognizes that the age is a number and the name is a string
const person = {
  age: 20,
  name: "Mark",
};

// typescript class
class Color {}
// new var calling the class
const red = new Color();
