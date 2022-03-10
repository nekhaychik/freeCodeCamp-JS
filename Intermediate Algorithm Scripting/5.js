function spinalCase(str) {
  str = str.split("");
  for (let i = 0; i < str.length; i++) {
    let codeChar = str[i].codePointAt();
    if (str[i] === " " || str[i] === "_") {
      str[i] = "-";
    } else if (codeChar > 64 && codeChar < 91) {
      if (i !== 0 && str[i - 1] !== "-") {
        str.splice(i - 1, 1, `${str[i - 1]}-`);
      }
      str[i] = String.fromCodePoint(str[i].codePointAt() + 32);
    }
  }
  return str.join("");
}

spinalCase("thisIsSpinalTapw");
