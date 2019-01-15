class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("the queue is empty");
        }
        return this.items.pop();
    }
    peak() {
        if (this.isEmpty()) {
            throw new Error("the queue is empty");
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    clear() {
        this.items.length = 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.toString());
    }
}
module.exports = { Stack };