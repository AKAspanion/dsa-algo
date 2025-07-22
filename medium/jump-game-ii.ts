function jump(nums: number[]): number {
  let near = 0,
    far = 0,
    jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    far = Math.max(far, i + nums[i]);
    if (i === near) {
      jumps++;
      near = far;
    }
  }

  return jumps;
}

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
