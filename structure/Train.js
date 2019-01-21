class Node {
    constructor(index) {
        this.index = index;
        this.next = null;
        this.count = 0;
    }
}
class Train {
    constructor(count) {
        this.head = null;
        this.count = count;
    }
    add() {
        let head = this.head;
        let node = new Node(1);
        node.count = this.count;
        if (head == null) {
            this.head = node;
        } else {
            while (head.next) {
                head = head.next;
            }
            node.index = head.index + 1;
            head.next = node;
        }
    }
    buyTicket(from, to) {
        let Position = this._getPosition(from, to);
        from = Position.from;
        to = Position.to;
        let min = this.ticketQuery(from, to);
        if (min > 0) {
            from.count--;
            to.count--;
            return true;
        } else {
            console.log("There are no tickets avilable");
            return false;
        }

    }
    ticketQuery(from, to) {
        let min = this.count;
        while (from != to.next) {
            if (from.count < min) {
                min = from.count;
            }
            from = from.next;
        }
        return min;
    }
    toString() {
        let head = this.head;
        let str = "";
        while (head) {
            str += `(${head.index},${head.count}),`;
            head = head.next;
        }
        return str.slice(0, -1);
    }
    _getPosition(from, to) {
        if (from >= to) {
            throw new Error("Please check your destination");
        }
        let head = this.head;
        while (head) {
            if (head.index == from) {
                from = head;
            }
            if (head.index == to) {
                to = head;
                break;
            }
            head = head.next;
        }
        if (Number.isInteger(from) || Number.isInteger(to)) {
            throw new Error("There is no suitable route");
        }
        return { from, to };
    }
}

module.exports = { Train };