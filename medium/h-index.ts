function hIndex(citations: number[]): number {
  const sorted = citations.sort((a, b) => a - b);
  const n = sorted.length;
  let hVal = 0;
  for (let i = 0; i < n; i++) {
    if (sorted[i] >= n - i) {
      hVal = n - i;
      return hVal;
    }
  }
  return 0;
}

console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
