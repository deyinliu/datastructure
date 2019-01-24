const BiTree = require("../structure/BiTree").BiTree;
const Stack = require("../structure/Stack").Stack;
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// 递归解法
function serialByPre(root) {
    if (!root) {
        return "#!";
    }
    let res = root.data + "!";
    res += serialByPre(root.left);
    res += serialByPre(root.right);
    return res;
}
// 迭代解法
function serialByPre2(root) {
    if (!root) {
        return "#!";
    }
    let stack = new Stack();
    stack.push(root);
    let cur = null;
    let str = "";
    while (!stack.isEmpty()) {
        cur = stack.pop();
        if (cur) {
            str += cur.data + "!";
            stack.push(cur.right ? cur.right : null);
            stack.push(cur.left ? cur.left : null);
        } else {
            str += "#!";
        }
    }
    return str;
}
const tree = new BiTree();
[5, 2, 6, 4, 7, 2, 8, 3, 4, 6, 7].forEach(val => tree.add(val));
let str = serialByPre(tree.root);
console.log(str);
str = serialByPre2(tree.root);
console.log(str);
// 递归解法
function reconByPreString(arr) {
    let val = arr.shift();
    if (val == "#") {
        return null;
    }
    let head = new Node(val);
    head.left = reconByPreString(arr);
    head.right = reconByPreString(arr);
    return head;
}
// 迭代解法
function reconByPreString2(arr) {
    let val = arr.shift();
    let head = generateNode(val);
    let stack = new Stack();
    if (head) {
        stack.push(head);
    }
    let cur = head;
    let node = null;
    while (!stack.isEmpty() && arr.length > 0) {
        node = stack.peak();
        if (node.right) {
            stack.pop();
        } else {
            if (node.left) {
                node.right = generateNode(arr.shift());
                if (node.right) {
                    stack.push(node.right);
                } else {
                    stack.pop();
                }
            } else {
                node.left = generateNode(arr.shift());
                if (node.left) {
                    stack.push(node.left);
                } else {
                    node.right = generateNode(arr.shift());
                    if (node.right) {
                        stack.push(node.right);
                    } else {
                        stack.pop();
                    }
                }
            }
        }
    }
    return head;
}

function generateNode(val) {
    if (val == "#") {
        return null;
    }
    return new Node(val);
}

let head = reconByPreString(str.split("!"));
console.log(serialByPre(head));

head = reconByPreString2(str.split("!"));
console.log(serialByPre2(head));