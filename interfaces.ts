// creating an interface for our vehicles
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
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
