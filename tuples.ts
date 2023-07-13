// creating an object
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// creating an array that looks like an object
// we add an annotaiton that changes this array into a tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];

// we could also make a type alias, then add the alias instead of the annotaiton
type Drink = [string, boolean, number];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];
