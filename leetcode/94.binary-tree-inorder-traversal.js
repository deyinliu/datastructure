/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function(root) {
  let cur = root;
  const stack = [];
  const num = [];
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    if (stack.length) {
      cur = stack.pop()
      num.push(cur.val);
      cur = cur.right;
    }
  }
  return num;
};

var inorderTraversal = function(root) {
  if (!root) {
    return;
  }
  function travel(root,num) {
    if (!root) {
      return;
    }
    num.push(travel(root.left), num);
    num.push(root.val);
    num.push(travel(root.right), num);
  }
  const num = [];
  travel(root,num)
  return num;
};
// @lc code=end

