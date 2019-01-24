const Queue = require("../structure/Queue").Queue;
const BiTree = require("../structure/BiTree").BiTree;
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function serialByLevel(head) {
    if (!head) {
        return "#!";
    }
    let str = head.data + "!";
    let queue = new Queue();
    queue.enqueue(head);
    while (!queue.isEmpty()) {
        head = queue.dequeue();
        if (head.left) {
            str += head.left.data + "!";
            queue.enqueue(head.left);
        } else {
            str += "#!";
        }
        if (head.right) {
            str += head.right.data + "!";
            queue.enqueue(head.right);
        } else {
            str += "#!";
        }
    }
    return str;
}
const tree = new BiTree();
[4, 2, 1, 3, 5, 3, 2, 6].forEach(val => tree.add(val));
let str = serialByLevel(tree.root)
console.log(str);

function reconByLevelString(arr) {
    let val = arr.shift();
    let head = generateNode(val);
    let queue = new Queue();
    if (head) {
        queue.enqueue(head);
    }
    let node = null;
    while (!queue.isEmpty()) {
        node = queue.dequeue();
        node.left = generateNode(arr.shift());
        node.right = generateNode(arr.shift());
        if (node.left) {
            queue.enqueue(node.left);
        }
        if (node.right) {
            queue.enqueue(node.right);
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

let arr = str.split("!");
let head = reconByLevelString(arr);
console.log(serialByLevel(head));