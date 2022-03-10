function myReplace(str, before, after) {
  if (before.codePointAt(0) > 64 && before.codePointAt(0) < 91) {
    after = after[0].toUpperCase() + after.slice(1, after.length);
  } else {
    after = after[0].toLowerCase() + after.slice(1, after.length);
  }
  return str.replace(before, after);
}

myReplace("Let us go to the store", "Store", "mall");
