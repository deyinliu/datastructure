const LinkList = require("../structure/LinkList.js").LinkList;

function removeMidNode(head) {
    if (head == null || head.next == null) {
        return head;
    }
    if (head.next.next == null) {
        head = head.next;
        return head;
    }
    let slow = head;
    let fast = head.next.next;
    while (fast.next != null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
}

link = new LinkList();
link.add(1);
link.add(2);
link.add(3);
link.add(4);
link.add(5);
link.add(6);
link.add(7);
link.add(8);
link.add(9);
link.add(10);
link.add(11);
console.log(link.toString());
head = removeMidNode(link.head);
console.log(head.toString());