function largestOfFour(arr) {
  let arrMax = [];
  for (let i = 0; i < arr.length; i++) {
    arrMax.push(Math.max.apply(null, arr[i]));
  }
  return arrMax;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);