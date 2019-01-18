const LinkList = require("../structure/LinkList.js").LinkList;

function listPartion(link, pivot) {
    let sh = null,
        st = null;
    let eh = null,
        et = null;
    let bh = null,
        bt = null;
    let head = link.head;
    while (head) {
        if (head.data < pivot) {
            if (sh == null) {
                sh = head;
                st = head;
            } else {
                st.next = head;
                st = head;
            }
        } else if (head.data == pivot) {
            if (eh == null) {
                eh = et = head;
            } else {
                et.next = head;
                et = head;
            }
        } else {
            if (bh == null) {
                bh = bt = head;
            } else {
                bt.next = head;
                bt = head;
            }
        }
        next = head.next;
        head = next;
    }
    if (st != null) {
        st.next = eh;
        et = et != null ? et : st;
    }
    if (et != null) {
        et.next = bh;
    }
    if (bt != null) {
        bt.next = null;
    }
    link.head = sh != null ? sh : eh != null ? eh : bh;
}
link = new LinkList();
link.add(7);
link.add(9);
link.add(1);
link.add(8);
link.add(5);
link.add(2);
link.add(5);
link.add(6);
link.add(1);
console.log(link.toString());
listPartion(link, 6);
console.log(link.toString());