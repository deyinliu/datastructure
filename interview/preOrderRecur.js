const BiTree = require("../structure/BiTree").BiTree;
const Stack = require("../structure/Stack").Stack;

function preOrderRecur(root) {
    let stack = new Stack();
    let str = "";
    stack.push(root);
    while (!stack.isEmpty()) {
        let head = stack.pop();
        str += head.data + ",";
        if (head.right) {
            stack.push(head.right);
        }
        if (head.left) {
            stack.push(head.left);
        }
    }
    return str.slice(0, -1);
}
const tree = new BiTree();
[6, 5, 2, 8, 2, 4, 9, 0].forEach(value => tree.add(value));
let str = preOrderRecur(tree.root)
console.log(str);