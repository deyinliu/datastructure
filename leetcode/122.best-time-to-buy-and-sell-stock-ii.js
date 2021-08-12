/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  const len = prices.length - 1;
  for (let i = 0; i < len; i++) {
    const cur = prices[i];
    const next = prices[i + 1];
    if (cur <= next) {
      max += next - cur;
    }
    
  }

  return max;
};
console.log(maxProfit([7, 1, 4, 3, 6, 5]));
// @lc code=end

