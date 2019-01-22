const Stack = require("./Stack").Stack;
class Node {
    constructor(data, left = null, right = null, parent = null) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.parent = parent;
    }
}
class BiTree {
    constructor() {
        this.root = null;
        this.str = "";
    }
    add(data) {
        let cur = this.root;
        let node = new Node(data);
        if (!cur) {
            this.root = node;
        } else {
            let pre = null;
            while (cur) {
                pre = cur;
                if (cur.data >= data) {
                    cur = cur.left;
                } else {
                    cur = cur.right;
                }
            }
            node.parent = pre;
            if (data <= pre.data) {
                pre.left = node;
            } else {
                pre.right = node;
            }
        }
    }
    inOrederRecur() {
        let root = this.root;
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
    preOrderRecur() {
        let root = this.root;
        if (!root) {
            return null;
        }
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
    posOrderRecur(root) {
        let root = this.root;
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
    _position(cur, data) {
        let point = null;
        while (cur) {
            point = cur;
            if (data <= cur.data) {
                cur = cur.left;
            } else {
                cur = cur.right;
            }
        }
        return point;
    }
}

module.exports = { BiTree };