class Vegetable {
  constructor(targetVegetable) {
    this.name = targetVegetable;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
