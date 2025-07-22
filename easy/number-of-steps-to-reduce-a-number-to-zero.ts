function numberOfSteps(num: number): number {
  let counter = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num -= 1;
    }
    counter++;
  }
  return counter;
}

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
console.log(numberOfSteps(123));
