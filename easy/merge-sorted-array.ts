/**
 Do not return anything, modify nums in-place instead.
 */
function merge(nums: number[], m: number, nums2: number[], n: number): void {
  const map = new Map<number, number>();
  for (let i = 0; i < m; i++) {
    const num = nums[i];
    if (num === undefined) continue;
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num)! + 1);
    }
  }

  for (let i = 0; i < n; i++) {
    const num = nums2[i];
    if (num === undefined) continue;
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num)! + 1);
    }
  }

  const sortedMapByKey = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));

  const newArr: number[] = [];
  sortedMapByKey.forEach((value, key) => {
    for (let i = 0; i < value; i++) {
      newArr.push(key);
    }
  });

  nums.length = 0;
  nums.push(...newArr);
}

// let nums = [2, 0];
// merge(nums, 1, [1], 3);

// let nums = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
// merge(nums, 6, [1, 2, 2], 3);

let nums1 = [
  -10, -10, -9, -9, -9, -8, -8, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6, -5, -5, -5, -4, -4, -4, -3,
  -3, -2, -2, -1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
merge(
  nums,
  55,
  [
    -10, -10, -9, -9, -9, -9, -8, -8, -8, -8, -8, -7, -7, -7, -7, -7, -7, -7, -7, -6, -6, -6, -6,
    -5, -5, -5, -5, -5, -4, -4, -4, -4, -4, -3, -3, -3, -2, -2, -2, -2, -2, -2, -2, -1, -1, -1, 0,
    0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5,
    6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9,
  ],
  99,
);

console.log(JSON.stringify(nums));
