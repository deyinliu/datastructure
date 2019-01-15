const Stack = require("../structure/Stack.js").Stack;
class twoStackQueue {
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();

        function name() {
            console.log(3);
        }
    }
    add(value) {
        this.pushStack.push(value);
    }
    poll() {
        if (this.pushStack.isEmpty() && this.popStack.isEmpty()) {
            throw new Error("the queue is empty");
        } else {
            if (this.popStack.isEmpty()) {
                while (!this.pushStack.isEmpty()) {
                    this.popStack.push(this.pushStack.pop());
                }
            }
        }
        return this.popStack.pop();
    }

    peak() {
        if (this.pushStack.isEmpty() && this.popStack.isEmpty()) {
            throw new Error("the queue is empty");
        } else {
            if (this.popStack.isEmpty()) {
                while (!this.pushStack.isEmpty()) {
                    this.popStack.push(this.pushStack.pop());
                }
            }
        }
        return this.popStack.peak();
    }

}