/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

const { buildTree } = require('./index');

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) {
    return false;
  }
  const nodes = [root];
  const sums = new Map();
  sums.set(root, root.val);
  while (nodes.length) {
    let len = nodes.length;
    while (len > 0) {
      const first = nodes.shift();
      if (first.left) {
        nodes.push(first.left);
        sums.set(first.left, sums.get(first) + first.left.val);
      }

      if (first.right) {
        nodes.push(first.right);
        sums.set(first.right, sums.get(first) + first.right.val);
      }

      if (!first.left && !first.right) {
        // console.log(sums.get(first))
        if (sums.get(first)===targetSum) {
          return true;
        }
      }
      len--;
    }
  }
  return false;
};
const root = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
console.log(hasPathSum(root, 22));
// @lc code=end

