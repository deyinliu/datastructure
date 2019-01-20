class Node {
    constructor(data, left = null, righ = null, parent = null) {
        this.data = data;
        this.left = left;
        this.righ = righ;
        this.parent = parent;
    }
}
class BiTree {
    constructor() {
        this.root = null;
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
                cur.righ = node;
            }
        }
    }

    _position(cur, data) {
        let point = null;
        while (cur) {
            point = cur;
            if (data <= cur.data) {
                cur = cur.left;
            } else {
                cur = cur.righ;
            }
        }
        return point;
    }
}

let tree = new BiTree();
[5, 4, 7, 2, 8, 3, 6, 3, 1].forEach(v => tree.add(v));
console.log(tree.root.righ);