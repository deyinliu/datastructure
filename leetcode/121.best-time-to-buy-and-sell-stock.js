/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let minprice = Infinity;
  const len = prices.length;
  for (let i = 0; i < len; i++) {
    const price = prices[i];
    minprice = Math.min(price, minprice);
    profit = Math.max(profit, price - minprice);
  }
  return profit;
};
console.log(maxProfit([7,1,5,3,6,4]));
// @lc code=end

