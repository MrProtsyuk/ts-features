// creating an interface for our vehicles
// you are not restricted to primitive types
interface Vehiclee {
  name: string;
  year: number;
  broken: boolean;
  // a function that returns a string
  summary(): string;
}

// creating an example vehicle
const oldCivic = {
  name: "Civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken} `;
  },
};

const soda = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Coca Cola is ${this.color} and has ${this.sugar} grams of sugar in it.`;
  },
};

// intead of passing in all the different types, we can pass in our interface instead and it helps keep things clean
const printVehicle = (vehicle: Vehiclee): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

// you could also make interfaces super generic
// when you create a function within an interface you are able to create different objects that have no realtion what so ever
// but you are able to call those objects within functions because you are passing that function in from the interface. Example here is
// the function summary(): string; which can be found in both oldCivic and soda, in the printSummary function below I can pass either
// and will not get an error because both contain summary() and satisfy typescripts interface.
interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(soda);
