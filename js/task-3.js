function filterArray(numbers, value) {
  const newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}
