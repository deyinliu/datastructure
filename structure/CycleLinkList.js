class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class DoubleLinkList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(data) {
        let node = new Node(data);
        let next = this.head;
        if (!head) {
            this.head = node;
            node.next = this.head;
        } else {
            while (next.next != this.head) {
                next = next.next;
            }
            next.next = node;
            node.next = this.head;
        }
        this.length++;
    }
    remove(node) {
        let prev = node.prev;
        let next = node.next;
        prev.next = next;
        next.prev = prev;
        this.length--;
    }
}

d = new DoubleLinkList();
d.add(1);
d.add(2);
d.add(3);
d.add(4);
console.log(d.head.next);