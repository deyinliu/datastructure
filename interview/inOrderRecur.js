const BiTree = require("../structure/BiTree").BiTree;
const Stack = require("../structure/Stack").Stack;

function inOrederRecur(root) {
    if (!root) {
        return null;
    }
    let stack = new Stack();
    let cur = root;
    let str = "";
    while (!stack.isEmpty() || cur != null) {
        if (cur != null) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            str += cur.data + ",";
            cur = cur.right;
        }
    }
    return str.slice(0, -1);
}
const tree = new BiTree();
[6, 5, 2, 8, 2, 4, 9, 0].forEach(value => tree.add(value));
let str = inOrederRecur(tree.root)
console.log(str);