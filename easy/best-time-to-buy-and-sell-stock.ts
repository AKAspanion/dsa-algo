import { maxSubArray } from './maximum-subarray.ts';

function maxProfit(prices: number[]): number {
  for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i + 1] - prices[i];
  }
  prices[prices.length - 1] = 0;
  return maxSubArray(prices);
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
