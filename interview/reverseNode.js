const LinkList = require("../structure/LinkList").LinkList;

function reverseNode(head, k) {
    if (k < 2) {
        return head;
    }
    let cur = head,
        pre = head,
        start = null,
        end = null;
    let count = 1;
    while (cur) {
        if (count == k) {
            if (pre == head) {
                start = cur;
            }
            end = cur.next;
            pre = reverse(pre, cur);
            count = 1
            cur = pre;
        }
        cur = cur ? cur.next : null;
        count++;
    }
    return start;
}

function reverse(pre, cur) {
    let head = null;
    let c = pre;
    let end = cur.next;
    while (pre != end) {
        next = pre.next;
        cur = cur ? cur.next : null;
        pre.next = head;
        head = pre;
        pre = next;
    }

    if (cur) {
        c.next = cur;
    } else {
        c.next = end;
    }
    pre = end;
    return pre;
}

const link = new LinkList();
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
link.add(12);
console.log(link.toString());
let hand = reverseNode(link.head, 3);
console.log(hand.toString());