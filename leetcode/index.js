function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

function buildTree(arr) {
  let root = new TreeNode(arr[0]),
    curr = root,
    queue = new Array(),
    n = 0;
  const len = arr.length;
  queue.push(curr);
  while (queue.length > 0 && n < len) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      curr = queue.pop();
      let cur = arr[n + 1];
      curr.left = cur !== null && cur !== undefined ? new TreeNode(arr[n + 1]) : null;
      curr.left && queue.unshift(curr.left); // 如果是null就不入队
      n++;
      cur = arr[n + 1];
      curr.right = cur !== null && cur !== undefined ? new TreeNode(arr[n + 1]) : null;
      curr.right && queue.unshift(curr.right); // 如果是null就不入队
      n++;
    }
  }
  return root
}


module.exports = {
  buildTree,
  TreeNode
}