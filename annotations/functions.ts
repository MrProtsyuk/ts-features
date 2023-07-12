// basic function showing type annotations and how to work with them in the function
const add = (a: number, b: number) => {
  return a + b;
};

// sure to add the annoatation on the end of the function so typescript knows you need to return something!!!
const subtract = (a: number, b: number): number => {
  return a - b;
};

// no matter how you write your functions (examples below)
// the annotations stay the same v
function divide(a: number, b: number): number {
  return a / b;
}
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void and never, only use never when you NEVER expect anything from the func
const logger = (message: string): void => {
  console.log(message);
};

const throwErr = (message: string): never => {
  throw new Error(message);
};

// destructuring an object with typescript and keeping annotations
const forecast = {
  date: new Date(),
  weather: "Sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
