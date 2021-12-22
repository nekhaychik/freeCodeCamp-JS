const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) { //Array.prototype.slice()
  const [ , , ...arr] = list;
  return arr;
}

const arr = removeFirstTwo(source);
