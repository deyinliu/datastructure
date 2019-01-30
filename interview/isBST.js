const BiTree = require("../structure/BiTree").BiTree;
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isBst(root) {
    if (root == null) {
        return true;
    }
    let head = root;
    let left = null;
    let pre = -Infinity;
    while (head) {
        if (head.left == null) {
            if (head.data < pre) {
                return false;
            }
            pre = head.data;
            head = head.right;
        } else {
            left = head.left;
            while (left.right != null && left.right != head) {
                left = left.right;
            }
            if (left.right == null) {
                left.right = head;
                head = head.left;
            } else {
                if (head.data < pre) {
                    return false;
                }
                pre = head.data;
                head = head.right;
                left.right = null;
            }
        }
    }
    return true;
}

const tree = new BiTree();
[1, 100, 3, 4, 5].forEach(val => tree.add(val));
console.log(isBst(tree.root));
let root = new Node(4);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(2);
root.right.right = new Node(6);
console.log(isBst(root));