class Vehicle {
  // creating a method within our class
  // creates a function that is read on running that checks for the color
  constructor(public color: string) {}

  // public means that we can call this method out side of the class
  public honk(): void {
    console.log("Beep Beep");
  }

  // protected is like private but we allow it to be called in other classes or methods but only within the child class
  protected brake(): void {
    console.log("Screech");
  }
}

// it takes all the methods of vehicle and adds them to car
// this is called inheritanceS
class Car extends Vehicle {
  // this will change the inherited value
  // private resticts the different methods that devs can call
  private drive(): void {
    console.log("Vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.brake();
  }
}

// creating a new variable with the class
// providing an argument for color
const carr = new Car("orange");
carr.startDrivingProcess();
