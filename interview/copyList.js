class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.rand = null;
    }
    toString(head) {
        let str = { data: [], rand: [] };
        while (head) {
            str.data.push(head.data);
            str.rand.push(head.rand == null ? null : head.rand.data);
            head = head.next;
        }
        return str;
    }
}

function copyList(head) {
    if (head == null) {
        return null;
    }
    let cur = head;
    while (cur) {
        let c = new Node(cur.data);
        next = cur.next;
        cur.next = c;
        c.next = next;
        cur = next;
    }
    cur = head;
    while (cur) {
        next = cur.next;
        next.rand = cur.rand == null ? null : cur.rand.next;
        cur = next.next;
    }
    let copy = head.next;
    cur = head;
    while (cur) {
        next = cur.next;
        cur = next.next;
        next.next = cur == null ? cur : cur.next;
    }
    return copy
}

let a = new Node(1),
    b = new Node(2),
    c = new Node(3),
    d = new Node(4);
a.next = b;
b.next = c;
c.next = d;
d.next = null;
a.rand = c;
b.rand = null;
c.rand = a;
d.rand = c;

let copy = copyList(a);
console.log(copy.toString(copy));