const BiTree = require("../structure/BiTree").BiTree;

function contains(tree1, tree2) {
    let left = tree1 ? tree1.left : null;
    let right = tree1 ? tree1.right : null;
    return check(tree1, tree2) || contains(left, tree2) || contains(right, tree2);
}

function check(h, t) {
    if (t == null) {
        return true;
    }
    if (h == null || h.data != t.data) {
        return false;
    }
    return check(h.left, t.left) && check(h.right, t.right);
}

function containSub(tree1, tree2) {
    let left = tree1 ? tree1.left : null;
    let right = tree1 ? tree1.right : null;
    return checkSub(tree1, tree2) || containSub(left, tree2) || containSub(right, tree2);
}

function checkSub(h, t) {
    if (h == null && t == null) {
        return true;
    }
    if (h != null && t == null) {
        return false;
    }

    if (h == null || h.data != t.data) {
        return false;
    }
    return checkSub(h.left, t.left) && checkSub(h.right, t.right);
}
const tree1 = new BiTree();
const tree2 = new BiTree();
[4, 2, 1, 3, 6, 5, 7].forEach(val => tree1.add(val));
[4, 2, 1].forEach(val => tree2.add(val));
// console.log(contains(tree1.root, tree2.root));
console.log(containSub(tree1.root, tree2.root));