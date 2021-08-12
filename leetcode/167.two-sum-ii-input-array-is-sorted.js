/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left <= right) {
    const low = numbers[left];
    const high = numbers[right];
    const cur = low + high;
    if (cur === target) {
      return [left, right];
    }else if (cur < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 9));
// @lc code=end

