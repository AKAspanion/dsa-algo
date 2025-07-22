function maximumWealth(accounts: number[][]): number {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    const sum = accounts[i].reduce((a, b) => a + b);
    if (sum > max) max = sum;
  }
  return max;
}

const accounts = [
  [1, 5],
  [7, 3],
  [3, 5],
];
// const accounts = [
//   [1, 2, 3],
//   [3, 2, 1],
// ];
console.log(maximumWealth(accounts));
