/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
 */

import buildTree from ".";

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
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  let min = 0
  const qune = [root];
  while (qune.length) {
    let len = qune.length;
    min++;
    console.log({ len });
    while (len > 0) {
      const cur = qune.shift();
      if (!cur.left && !cur.right) {
        return min;
      }
      if (cur.left) {
        qune.push(cur.left);
      }
      if (cur.right) {
        qune.push(cur.right);
      }

      len--;
    }
  }
  return min;
};

const root = buildTree([3, 9, 20, 10, 11, 5, 7, 4, 5]);

console.log(minDepth(root));
// @lc code=end

