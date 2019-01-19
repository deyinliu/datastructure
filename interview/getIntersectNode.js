const Node = require("../structure/Node").Node;

function getLoopNode(head) {
    let slow = head.next;
    let fast = head.next.next;
    while (fast != slow) {
        if (fast.next == null || fast.next.next == null) {
            return null;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    fast = head;
    while (fast != slow) {
        slow = slow.next;
        fast = fast.next;
    }
    return fast;
}

function noLoop(head1, head2) {
    let h1 = head1,
        h2 = head2,
        n = 0;
    while (h1.next) {
        n++;
        h1 = h1.next;
    }
    while (h2.next) {
        n--;
        h2 = h2.next;
    }
    if (h1 != h2) {
        return null;
    }
    h1 = n > 0 ? head1 : head2;
    h2 = h1 == head1 ? head2 : head1;
    n = Math.abs(n);
    while (n != 0) {
        h1 = h1.next;
        n--;
    }
    while (h1 != h2) {
        h1 = h1.next;
        h2 = h2.next;
    }
    return h1;
}

function bothLoop(head1, head2) {
    let h1 = getLoopNode(head1);
    let h2 = getLoopNode(head2);
    if (h1 == h2) {
        next = h1.next;
        h1.next = null;
        node = noLoop(head1, head2);
        h1.next = next;
        return node;
    } else {
        let cur = h1.next;
        while (cur != h1) {
            if (cur == h2) {
                return h2;
            }
            cur = cur.next;
        }
        return null;
    }
}

function getIntersectNode(head1, head2) {
    if (head1 == null || head2 == null) {
        return null;
    }
    let h1 = getLoopNode(head1);
    let h2 = getLoopNode(head2);
    if (h1 == null && h2 == null) {
        return noLoop(head1, head2);
    }
    if (h1 != null && h2 != null) {
        return bothLoop(head1, head2);
    }
    return null;
}

let head1 = new Node("h1");
let head2 = new Node("h2")
let h2 = new Node(2),
    h3 = new Node(3),
    h4 = new Node(4),
    h5 = new Node(5),
    h6 = new Node(6),
    h7 = new Node(7),
    h8 = new Node(8),
    h9 = new Node(9),
    h10 = new Node(10);
head1.next = h2;
h2.next = h3;
h3.next = h4;
h4.next = h5;
h5.next = h3;
head2.next = h6;
h6.next = h7;
h7.next = h8;
h8.next = h6;
console.log(getIntersectNode(head1, head2));