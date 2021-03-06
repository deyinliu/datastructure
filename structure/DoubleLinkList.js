class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(data) {
        let node = new Node(data);
        let head = this.head;
        let prev = head;
        if (!head) {
            this.head = node;
        } else {
            while (head.next) {
                head = head.next;
                prev = head
            }
            head.next = node;
            node.prev = prev
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