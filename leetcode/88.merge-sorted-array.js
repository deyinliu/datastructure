/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let l1 = m - 1;
  let l2 = n - 1;
  let len = m + n - 1;
  while (l1 >= 0 || l2 >= 0) {
    if (l1===-1) {
      nums1[len] = nums2[l2];
      l2--;
    }else if (l2===-1) {
      nums1[len] = nums1[l1];
      l1--;
    }else if (nums1[l1] >= nums2[l2]) {
      nums1[len] = nums1[l1];
      l1--;
    } else {
      nums1[len] = nums2[l2];
      l2--;
    }
    len = len - 1;
  }
};
const nums1 = [1, 2, 5, 0, 0, 0], m = 3, nums2 = [3,4,6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
// @lc code=end

