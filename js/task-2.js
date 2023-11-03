function makeArray(firstArray, secondArray, maxLength) {
  const arr = firstArray.concat(secondArray);
  if (arr.length > maxLength) {
    arr.length = maxLength;
  }
  return arr;
}
