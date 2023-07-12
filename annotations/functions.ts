// basic function showing type annotations and how to work with them in the function
const add = (a: number, b: number) => {
  return a + b;
};

// sure to add the annoatation on the end of the function so typescript knows you need to return something!!!
const subtract = (a: number, b: number): number => {
  return a - b;
};
