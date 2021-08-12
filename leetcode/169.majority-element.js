/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = new Map();
  let max = 0;
  let majority = nums[0];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (map.has(item)) {
      const count = map.get(item);
      if (count + 1 > max) {
        max = count + 1;
        majority = item;
      }
      map.set(item, count + 1);
    } else {
      map.set(item, 1);
    }

  }
  return majority;
};
console.log(majorityElement([3, 2, 3]));
// @lc code=end

