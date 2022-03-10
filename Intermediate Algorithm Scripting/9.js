function fearNotLetter(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1].codePointAt() + 1 !== str[i].codePointAt())
      return String.fromCodePoint(str[i - 1].codePointAt() + 1);
  }
  return undefined;
}

fearNotLetter("abce");
