function removeDuplicates(nums: number[]): number {
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

  const newArr: number[] = [];
  map.forEach((value, key) => {
    const max = Math.min(value, 2);
    for (let i = 0; i < max; i++) {
      newArr.push(Number(key));
    }
  });

  nums.length = 0;
  nums.push(...newArr);

  return newArr.length;
}

// const z = [1, 1, 1, 2, 2, 3];
const z = [-1, 0, 0, 0, 0, 3, 3];

console.log(removeDuplicates(z));
console.log(z);
