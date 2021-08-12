/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 var isSameTree = function(p, q) {
  let pCur = p;
  let qCur = q;

  const stack = [];
  while (pCur || qCur || stack.length) {
    while (pCur || qCur) {
      console.log(pCur?.val, qCur?.val);
      if (pCur?.val !== qCur?.val) {
        return false;
      }
      stack.push({ pCur, qCur });
      pCur = pCur.left;
      qCur = qCur.right;
    }
    if (stack.length) {
      const top = stack.pop();
      pCur = top.pCur.right;
      qCur = top.qCur.left;  
    }
  }
  return true;
};
var isSymmetric = function(root) {
  let left = root.left;
  let right = root.right;
  return isSameTree(left, right);
};
class treeNode {
  constructor(val, left, right) {
    this.val = (val == undefined ? 0 : val);
    this.left = (left == undefined ? null : left);
    this.right = (right == undefined ? null : right);
  }
}
function generateBinarySearchTree(arr) {
  let root = new treeNode(arr[0]),
    curr = root,
    queue = new Array(),
    n = 0;
  queue.push(curr);
  while(queue.length > 0) {
    let size = queue.length;
    for(let i=0; i<size; i++) {
      curr = queue.pop();
      curr.left = arr[n+1] ? new treeNode(arr[n+1]) : null;
      curr.left && queue.unshift(curr.left); // 如果是null就不入队
      n++;

      curr.right = arr[n+1] ? new treeNode(arr[n+1]) : null;
      curr.right && queue.unshift(curr.right); // 如果是null就不入队
      n++;
    }
  }
  return root
}
const root = generateBinarySearchTree([1, 2, 2, 3, 4, 4, 5]);
console.log(isSymmetric(root));
// @lc code=end

