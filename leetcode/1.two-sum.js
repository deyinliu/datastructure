/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const gap = target - num;
    if (map.has(num)) {
      return [map.get(num), i];
    }
    map.set(gap, i);
  }
  return [];
};
// @lc code=end

