// creating an interface for our vehicles
// you are not restricted to primitive types
interface Vehicle {
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

// intead of passing in all the different types, we can pass in our interface instead and it helps keep things clean
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

// you could also make interfaces super generic
interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
