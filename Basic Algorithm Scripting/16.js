function chunkArrayInGroups(arr, size) {
  let result = [];

  for (let start = 0, end = size; start < arr.length; start += size, end += size) {
    result.push(arr.slice(start, end))
  }
  
  return result;
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);