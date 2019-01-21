const LinkList = require("../structure/LinkList").LinkList;

function mergeList(head1, head2) {
    if (head1 == null || head2 == null) {
        return head1 != null ? head1 : head2;
    }
    let big = head1.data > head2.data ? head1 : head2;
    let small = head1.data <= head2.data ? head1 : head2;
    let pre = small;
    let next = small.next;
    let cur = null;
    while (next && big) {
        if (big.data >= pre.data && big.data < next.data) {
            // console.log("pre:", pre);
            // console.log("big:", big);
            // console.log("next:", next);
            pre.next = big;
            cur = big.next;
            big.next = next;
            pre = pre.next;
            big = cur;
        } else {
            pre = pre.next;
            next = next.next;
        }
    }
    if (pre.next == null) {
        pre.next = big;
    }
    return small;
}

let h1 = new LinkList();
let h2 = new LinkList();
h1.add(1);
h1.add(3);
h1.add(5);
h2.add(5);
h2.add(7);
h2.add(8);
h2.add(9);
let small = mergeList(h1.head, h2.head);

console.log(small.toString());