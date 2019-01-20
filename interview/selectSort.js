const LinkList = require("../structure/LinkList").LinkList;

function selectSort(head) {
    let newHead = null;
    let tail = null;
    let small = null;
    let smallPre = null;
    while (head) {
        smallPre = getSmallPre(head);
        small = smallPre ? smallPre.next : head;
        if (small == head) {
            head = head.next;
        } else {
            smallPre.next = small.next;
            head = head;
        }
        if (tail) {
            tail.next = small;
        } else {
            newHead = small;
        }
        tail = small;
    }
    return newHead;
}

function getSmallPre(head) {
    let smallPre = null;
    let min = head;
    let pre = head;
    let cur = head.next;
    while (cur) {
        if (cur.data < min.data) {
            smallPre = pre;
            min = cur;
        }
        pre = pre.next;
        cur = cur.next;
    }
    return smallPre;
}

const list = new LinkList();
list.add(2);
list.add(2);
list.add(1);
list.add(5);
list.add(1);
let head = selectSort(list.head);
console.log(head.toString())