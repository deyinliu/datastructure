const Queue = require("../structure/Queue").Queue;
const BiTree = require("../structure/BiTree").BiTree;

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
console.log(serialByLevel(tree.root));