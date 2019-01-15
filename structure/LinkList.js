class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    toString() {
        let head = this;
        let str = "";
        while (head) {
            str += head.data.toString() + ",";
            head = head.next;
        }
        return str.slice(0, -1);
    }
}

class LinkList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    add(data) {
        var node = new Node(data);
        var current = this.head;
        if (!current) {
            this.head = node;
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
    find(data) {
        var current = this.head;
        while (current !== null && current.data !== data) {
            current = current.next;
        }
        return current;
    }
    insert(data, position) {
        var newNode = new Node(data);
        if (position <= 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            var prv = this._findPos(position);
            newNode.next = prv.next;
            prv.next = newNode;
        }
        this.length++;
    }
    remove(position) {
        let data;
        if (position == 1) {
            data = this.head.data;
            this.head = this.head.next;
        } else if (position <= 0) {
            return null;
        } else {
            let prv = this._findPrv(position);
            let current = prv.next;
            data = current.data;
            prv.next = current.next;
            current.next = null;
        }
        this.length--;
        return data;
    }
    _findPrv(position) {
        let head = this.head;
        while (head.next.next && --position != 1) {
            head = head.next;
        }
        // console.log(head);
        return head;
    }
    _findPos(position) {
        var head = this.head;
        while (head.next && --position != 0) {
            head = head.next;
        }
        return head;
    }
    toString() {
        let head = this.head;
        let str = "";
        while (head) {
            str += head.data.toString() + ",";
            head = head.next;
        }
        return str.slice(0, -1);
    }

}

// L = new LinkList();
// L.add(1);
// L.insert(3, 1);
// L.insert(2, 0);
// L.insert(2, 1);
// console.log(L.toString());
// console.log(L.remove(0));
// console.log(L.toString());
module.exports = { LinkList };