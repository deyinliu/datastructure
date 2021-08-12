/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @param {TreeNode} root
 * @return {boolean}
 */
const treeDeep = (root) => {
  if (!root) {
    return 0
  }
  return Math.max(treeDeep(root.left), treeDeep(root.right)) + 1;
}

var isBalanced = function (root) {
  if (!root) {
    return true;
  }
  let left = treeDeep(root.left);
  let right = treeDeep(root.right);
  if (Math.abs(left - right) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
};
// @lc code=end

