const profile = {
  name: "Alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// yes this could be destructuring with out the annotations
// but in order for typescript to know, you must annotate it like this
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
