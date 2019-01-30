class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function getNextNode(node) {
    let next = null;
    let parent = null;
    if (node.right != null) {
        return getLeft(node.right);
    } else {
        parent = node.parent;
        while (parent.left != node && parent != null) {
            node = parent;
            parent = parent.parent;
        }
        return parent;
    }
    return null;
}

function getLeft(right) {
    while (right.left) {
        right = right.left;
    }
    return right;
}