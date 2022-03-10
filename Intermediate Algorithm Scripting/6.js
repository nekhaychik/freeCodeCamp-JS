function translatePigLatin(str) {
  str = str.split("");
  let tempArr = [];

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] !== "e" &&
      str[i] !== "u" &&
      str[i] !== "i" &&
      str[i] !== "o" &&
      str[i] !== "a"
    ) {
      tempArr.push(str[i]);
      str.shift();
      i--;
    } else break;
  }
  if (tempArr.length !== 0) {
    str.push(...tempArr, "ay");
  } else {
    str.push("way");
  }
  return str.join("");
}

translatePigLatin("consonant");
