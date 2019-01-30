const BiTree = require("../structure/BiTree").BiTree;

function isBalance(node) {
    let arr = [true];
    getHeight(node, 1, arr);
    return arr[0];
}

function getHeight(head, level, arr) {
    if (head == null) {
        return level;
    }
    let leftH = getHeight(head.left, level + 1, arr);
    if (!arr[0]) {
        return level;
    }
    let rightH = getHeight(head.right, level + 1, arr);
    if (!arr[0]) {
        return level;
    }
    if (Math.abs(leftH - rightH) > 1) {
        arr[0] = false;
    }
    return Math.max(leftH, rightH);
}

const tree = new BiTree();
[4, 2, 1, 3, 6, 5, 7, 8, 9].forEach(val => tree.add(val));
console.log(isBalance(tree.root));