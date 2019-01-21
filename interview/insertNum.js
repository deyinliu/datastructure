const Node = require("../structure/Node").Node;

function insertNum(head, num) {
    let pre = head;
    let next = head.next;
    let node = new Node(num);
    if (head == null) {
        head = node;
        node.next = head;
        return head;
    }
    while (next != head) {
        if (num >= pre.data && num < next.data) {
            break;
        }
        next = next.next;
        pre = pre.next;
    }
    pre.next = node;
    node.next = head;
    return head.data < num ? head : node;
}