function lowAncestor(root, node1, node2) {
    if (root == null || root == node1 || root == node2) {
        return root;
    }

    let left = lowAncestor(root.left, node1, node2);
    let right = lowAncestor(root.right, node1.node2);
    if (left != null && right != null) {
        return root;
    }
    return left != null ? left : right;
}