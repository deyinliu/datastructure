/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums?.length) {
    return null;
  }

  function toTree(nums, start, end) {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = toTree(nums, start, mid - 1);
    root.right = toTree(nums, mid + 1, end);
    return root;
  }

  return toTree(nums, 0, nums.length - 1);
};
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
const nums = [-1,0,1,2];
console.log(sortedArrayToBST(nums));
// @lc code=end

