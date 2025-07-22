function runningSum(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
}

const runningSumNums = [1, 2, 3, 4];
console.log(runningSum(runningSumNums));
console.log(runningSumNums);
