function pairElement(str) {
  str = str.split("");
  let resultArr = [];
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        resultArr.push([str[i], "T"]);
        break;
      case "T":
        resultArr.push([str[i], "A"]);
        break;
      case "C":
        resultArr.push([str[i], "G"]);
        break;
      case "G":
        resultArr.push([str[i], "C"]);
        break;
      default:
        break;
    }
  }

  return resultArr;
}

pairElement("GCG");
