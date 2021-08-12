/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums?.length) {
    return 0;
  }
  const len = nums.length;
  let ans = len;
  let low = 0, high = len - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (target <= nums[mid]) {
      high = mid - 1;
      ans = mid;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};
console.log(searchInsert([1, 3], 3));
// @lc code=end

