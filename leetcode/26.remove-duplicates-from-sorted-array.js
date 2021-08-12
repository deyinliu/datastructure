/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
   const n = nums.length
  if (n === 0) {
    return 0
  }
  let slow = 1, fast = 1;
  while (fast < n) {
    if (nums[fast] !== nums[fast-1]) {
      nums[slow] = nums[fast];
      slow += 1;
    }
    fast += 1;
  }
  return slow;
};
// @lc code=end

