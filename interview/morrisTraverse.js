const BiTree = require("../structure/BiTree").BiTree;

function inOrderTraverse(root) {
    if (!root) {
        return null;
    }

    let str = "";
    let head = root;
    let cur = null;
    while (head) {
        if (head.left == null) {
            str += head.data + ",";
            head = head.right;
        } else {
            cur = head.left;
            while (cur.right != null && cur.right != head) {
                cur = cur.right;
            }
            if (cur.right != null) {
                str += head.data + ",";
                cur.right = null;
                head = head.right;
            } else {
                cur.right = head;
                head = head.left;
            }
        }
    }
    return str.slice(0, -1);
}

function preOrderTraverse(root) {
    if (root == null) {
        return null;
    }
    let head = root;
    let cur = null;
    let str = "";
    while (head != null) {
        cur = head.left;
        if (cur == null) {
            str += head.data + ",";
            head = head.right;
        } else {
            while (cur.right != null && cur.right != head) {
                cur = cur.right;
            }
            if (cur.right == null) {
                cur.right = head;
                str += head.data + ",";
                head = head.left;
            } else {
                cur.right = null;
                head = head.right;
            }
        }
    }
    return str.slice(0, -1);
}
const tree = new BiTree();
[4, 2, 1, 3, 5, 6, 7].forEach(val => tree.add(val));
let str = inOrderTraverse(tree.root);
console.log(str);
str = preOrderTraverse(tree.root);
console.log(str);