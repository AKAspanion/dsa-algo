/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  const rotate = k % n;
  nums.unshift(...nums.splice(n - rotate, rotate));
}

const numsRotate = [1, 2, 3, 4, 5, 6, 7];
rotate(numsRotate, 3);
console.log(numsRotate);
