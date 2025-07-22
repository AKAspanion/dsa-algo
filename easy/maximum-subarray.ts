export function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      dp[i] = nums[i];
    } else {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }
  }

  let max = dp[0];
  for (let i = 1; i < dp.length; i++) {
    if (dp[i] > max) max = dp[i];
  }

  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
