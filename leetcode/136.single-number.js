/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    result = result ^ nums[i];
  }
  return result;
};
console.log(singleNumber([2, 3, 2, 3, 2, 5, 4, 4]));
// @lc code=end

