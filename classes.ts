class Vehicle {
  // creating a method within our class
  drive(): void {
    console.log("Vroom Vroom");
  }
  honk(): void {
    console.log("Beep Beep");
  }
}

// creating a new variable with the class
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
