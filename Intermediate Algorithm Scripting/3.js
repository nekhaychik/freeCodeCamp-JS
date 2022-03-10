function destroyer(arr, ...args) {
  for (let i = 0; i < arr.length; i++) {
    if (args.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
