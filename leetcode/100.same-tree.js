/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let pCur = p;
  let qCur = q;
  const stack = [];
  while (pCur || qCur || stack.length) {
    while (pCur || qCur) {
      if (pCur?.val !== qCur?.val) {
        return false;
      }
      stack.push({ pCur, qCur });
      pCur = pCur.left;
      qCur = qCur.left;
    }
    if (stack.length) {
      const top = stack.pop();
      pCur = top.pCur.right;
      qCur = top.qCur.right;  
    }
  }
  return true;
};
// @lc code=end

