/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const num = [];

  if (!root) {
    return num;
  }

  const stack = [];
  let cur = root;
  stack.push(root);

  while (stack.length) {
    cur = stack.pop();
    num.push(cur.val);

    if (cur.left) {
      stack.push(cur.left);
    }

    if (cur.right) {
      stack.push(cur.right);
    }

  }

  return num.reverse();
};
// @lc code=end

