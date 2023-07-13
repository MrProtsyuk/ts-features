class Vehicle {
  // creating a method within our class
  drive(): void {
    console.log("Vroom Vroom");
  }
  honk(): void {
    console.log("Beep Beep");
  }
}

// it takes all the methods of vehicle and adds them to car
// this is called inheritanceS
class Car extends Vehicle {}

// creating a new variable with the class
const carr = new Car();
carr.drive();
carr.honk();
