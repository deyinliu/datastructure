const Stack = require('../structure/Stack.js').Stack;

class getMin {
    constructor() {
        this.dataStack = new Stack();
        this.minStack = new Stack();
    }
    push(value) {
        this.dataStack.push(value);
        if (this.minStack.isEmpty()) {
            this.minStack.push(value);
        } else {
            if (this.getMin() >= value) {
                this.minStack.push(value);
            }
        }
    }
    pop() {
        if (this.dataStack.isEmpty()) {
            throw new Error("you stack is empty");
        } else {
            var value = this.dataStack.pop();
            if (value === this.getMin()) {
                this.minStack.pop();
            }
        }
        return value;
    }
    getMin() {
        if (this.minStack.isEmpty()) {
            throw new Error("You stack is empty");
        } else {
            return this.minStack.peak();
        }
    }
}