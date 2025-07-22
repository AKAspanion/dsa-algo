function removeDuplicates(nums: number[]): number {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1);
  }

  nums.length = 0;
  nums.push(...map.keys());

  return map.size;
}

const numsT = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const nums = [1, 1, 2];

console.log(removeDuplicates(numsT));
console.log(numsT);
