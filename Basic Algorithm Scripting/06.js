function confirmEnding(str, target) {
  return str.substr(-target.length) === target; //отрицательный аргумент: str.length - target.lenfgth = start
}
  
confirmEnding("Bastian", "n");