class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    toString() {
        let head = this;
        let str = "";
        while (head) {
            str += head.data.toString() + ",";
            head = head.next;
        }
        return str.slice(0, -1);
    }
}
module.exports = { Node };