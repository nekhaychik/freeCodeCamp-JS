function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  let indexLowest = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      indexLowest = i;
      break;
    }
  }
  return indexLowest;
}
  
getIndexToIns([5, 3, 20, 3], 5);