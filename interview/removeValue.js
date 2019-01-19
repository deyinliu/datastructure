const LinkList = require("../structure/LinkList").LinkList;

function removeValue(head, value) {
    let pre = null;
    while (head) {
        if (head.data != value) {
            break;
        }
        pre = head;
        pre.next = null;
        head = head.next;

    }
    pre = head;
    let next = head ? head.next : head;
    while (next) {
        if (next.data == value) {
            pre.next = next.next;
            next.next = null;
        } else {
            pre = next;
        }
        next = pre.next;
    }

    return head;
}

const list = new LinkList();
list.add(1);
// list.add(1);
// list.add(1);
// list.add(1);
// list.add(1);
list.add(2);
let head = removeValue(list.head, 1);
console.log(head.toString());