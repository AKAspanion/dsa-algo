function majorityElement(nums: number[]): number {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === undefined) continue;
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num)! + 1);
    }
  }

  let max = [nums[0], 1];
  map.forEach((value, key) => {
    if (value > max[1]) max = [key, value];
  });

  return max[0];
}

const nums = [3, 2, 3];
// const nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums));
console.log(nums);
