// array without annotations
const carMakers = ["Ford", "Toyota", "Merc"];

// array with annotations
const carMaker: string[] = ["Ford", "Toyota", "Merc"];

// arrays within an array
const carsByMake = [["f150"], ["Tacoma"], ["E500"]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), "2003-10-10"];

// must annotate if you are making an empty array
const importantDays: (Date | string)[] = [];
