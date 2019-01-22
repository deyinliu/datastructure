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
            cur = this._position(cur, data);
            node.parent = cur;
            if (data <= cur.data) {
                cur.left = node;
            } else {
                cur.right = node;
            }
        }
    }
    inOrderRecur(head) {
        // let head = this.root;
        if (head == null) {
            return;
        }
        this.inOrderRecur(head.left);
        this.str += head.data + " ";
        this.inOrderRecur(head.right);

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