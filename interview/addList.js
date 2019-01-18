const LinkList = require("../structure/LinkList").LinkList;
const Node = require("../structure/Node").Node;

function addList(head1, head2) {
    head1 = reverse(head1);
    head2 = reverse(head2);
    let n,
        h1 = 0,
        h2 = 0,
        ca = 0,
        head = null;
    while (head1 || head2) {
        h1 = head1 ? head1.data : 0;
        h2 = head2 ? head2.data : 0;
        n = h1 + h2 + ca;
        let node = new Node(n % 10);
        ca = Math.floor(n / 10);
        node.next = head;
        head = node;
        head1 = head1 ? head1.next : null;
        head2 = head2 ? head2.next : null;
    }
    if (ca > 0) {
        node = new Node(ca);
        node.next = head;
        head = node;
    }
    return head;
}

function reverse(head) {
    let pre = null
    let next = null;
    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}

let list = new LinkList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
let list1 = new LinkList();
list1.add(9);
list1.add(2);
list1.add(3);
list1.add(3);
let head = addList(list.head, list1.head);
console.log(head.toString());