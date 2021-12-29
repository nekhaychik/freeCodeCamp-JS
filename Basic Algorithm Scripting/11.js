function titleCase(str) {
  let arr = str.toLowerCase().split(' ');
  let result = '';
  for (let el of arr) {
    result += el[0].toUpperCase() + el.slice(1, ) + ' ';
  }
   return result.slice(0, result.length - 1);
  }
  
titleCase("I'm a little tea pot");