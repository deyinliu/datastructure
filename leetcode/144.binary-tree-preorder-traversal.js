/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
var preorderTraversal = function(root) {
  const num = [];
  const stack = [];
  let cur = root;
  while (cur || stack.length) {
    while (cur) {
      num.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur.right;
  }
  return num;
};
var preorderTraversalx = function(root) {
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
    if (cur.right) {
      stack.push(cur.right);
    }

    if (cur.left) {
      stack.push(cur.left);
    }

  }

  return num;
};
var preorderTraversalxx = function(root) {
  const num = [];
  if (!root) {
    return num;
  }
  function travel(root) {
    if (!root) {
      return;
    }

    num.push(root.val)
    travel(root.left);
    travel(root.right);
  }
  travel(root);
  return num;
};
const { buildTree } = require('./index');
const root = buildTree([1,null,2,3]);
console.log(preorderTraversalx(root));
// @lc code=end

