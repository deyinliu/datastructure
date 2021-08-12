/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0;
  let max = nums[0];
  
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    sum = sum + nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
// @lc code=end

