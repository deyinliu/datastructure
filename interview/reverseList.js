const LinkList = require("../structure/LinkList.js").LinkList;

const reverseList = (head) => {
    let pre = null,
        next = null;
    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}

const list = new LinkList();
list.add(1);
list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
console.log(list.toString());
const reverse = reverseList(list.head);
console.log(reverse.toString());