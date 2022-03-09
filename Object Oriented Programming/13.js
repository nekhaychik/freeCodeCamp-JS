function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 2,
  eat() {
    console.log("eat method");
  },
  describe() {
    console.log("describe method");
  },
};
