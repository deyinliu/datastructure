function posOrderRecur(root) {
    if (!root) {
        return null;
    }
    let s1 = new Stack();
    let s2 = new Stack();
    let cur = root;
    let str = "";
    s1.push(cur);
    while (!s1.isEmpty()) {
        cur = s1.pop();
        s2.push(cur);
        if (cur.left) {
            s1.push(cur.left);
        }
        if (cur.right) {
            s1.push(cur.right);
        }
    }
    while (!s2.isEmpty()) {
        cur = s2.pop();
        str += cur.data + ",";
    }
    return str.slice(0, -1);
}