/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function(root) {
  const stack = [root];
  const deep = 0;
  while (stack.length) {
    let len = stack.length;
    deep++;
    while (len > 0) {
      const first = stack.shift();
      if (first.left) {
        stack.push(first.left);
      }
      if (first.right) {
        stack.push(first.right);
      }
      len--;
    }
  }
  return deep;
};
// @lc code=end

