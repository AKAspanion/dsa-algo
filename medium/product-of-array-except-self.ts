function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const leftProd = new Array(n).fill(1);
  const rightProd = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    const leftFirst = nums[i - 1] === undefined ? 1 : nums[i - 1];
    const leftSecond = leftProd[i - 1] === undefined ? 1 : leftProd[i - 1];
    leftProd[i] = leftFirst * leftSecond;
    const rightFirst = nums[n - i] === undefined ? 1 : nums[n - i];
    const rightSecond = rightProd[n - i] === undefined ? 1 : rightProd[n - i];
    rightProd[n - i - 1] = rightFirst * rightSecond;
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = leftProd[i] * rightProd[i];
  }
  return nums;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
