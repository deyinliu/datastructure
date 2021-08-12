/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const slow = 0, fast = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const num = nums[fast];
    if (num !== val) {
      nums[slow] = num;
      slow++;
    }
    fast++;
    
  }
  return slow;
};
// @lc code=end

