function repeatStringNumTimes(str, num) {
  if (num > 0) {
    let newStr = '';
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
    return newStr;
  }
  return '';
}
  
repeatStringNumTimes("abc", 3);