const BiTree = require("../structure/BiTree").BiTree;

function isCBT(root) {
    if (root == null) {
        return true;
    }
    let arr = [root];
    let cur = null;
    let leaf = false;
    while (arr.length != 0) {
        cur = arr.shift();
        if (leaf && (cur.left != null || cur.right != null) || (cur.left == null && cur.right != null)) {
            return false;
        }
        if (cur.left) {
            arr.push(cru.left);
        }

        if (cur.right) {
            arr.push(cur.right);
        } else {
            leaf = true;
        }
    }
    return leaf;
}