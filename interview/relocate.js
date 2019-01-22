const LinkList = require("../structure/LinkList").LinkList;

function relocate(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let right = slow.next;
    let left = head;
    while (left.next != slow.next) {
        let next = right.next;
        right.next = left.next;
        left.next = right;
        left = right.next;
        right = next;
    }
    left.next = right;
}

const list = new LinkList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
relocate(list.head);
console.log(list.toString());