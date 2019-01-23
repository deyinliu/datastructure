const Stack = require("../structure/Stack").Stack;
const BiTree = require("../structure/BiTree").BiTree;
class node {
    constructor(cur, parent) {
        this.cur = cur;
        this.parent = parent;
    }
}

function printEdge(root) {
    if (!root) {
        return null;
    }
    let str = "";
    let height = getHeight(root);
    let edgeMap = [];
    for (let i = 0; i < height; i++) {
        edgeMap.push([false, false]);
    }
    setMap(root, edgeMap);
    for (let i = 0; i < height; i++) {
        console.log(edgeMap[i][0].data);
    }
    getLeafNode(root, edgeMap);

    for (let i = height - 1; i > -1; i--) {
        if (edgeMap[i][0] != edgeMap[i][1]) {
            console.log(edgeMap[i][1].data);
        }
    }
}

function getLeafNode(root, edgeMap, len = 0) {
    let leaf = [];
    if (!root) {
        return leaf;
    }
    if (root.left == null && root.right == null && root != edgeMap[len][0] && root != edgeMap[len][1]) {
        console.log(root.data);
    }
    getLeafNode(root.left, edgeMap, len + 1);
    getLeafNode(root.right, edgeMap, len + 1);
}

function setMap(root, edgeMap, len = 0) {
    if (!root) {
        return;
    }
    edgeMap[len][0] = edgeMap[len][0] ? edgeMap[len][0] : root;
    edgeMap[len][1] = root;
    setMap(root.left, edgeMap, len + 1);
    setMap(root.right, edgeMap, len + 1);
}

function getHeight(root, len = 0) {
    if (!root) {
        return len;
    }
    return Math.max(getHeight(root.left, len + 1), getHeight(root.right, len + 1));
}
const tree = new BiTree();
[6, 2, 7, 4, 2, 3, 8, 9, 6].forEach(value => tree.add(value));
printEdge(tree.root);