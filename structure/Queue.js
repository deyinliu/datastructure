class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(value) { //add an item at the end of the queue
        this.queue.push(value);
    }
    dequeue() { // delete an item from the head of the queue and then return the item
        if (this.isEmpty()) {
            throw new Error("the queue is empty");
        }
        return this.queue.shift();
    }
    front() { // return the first item of the queue
        if (this.isEmpty()) {
            throw new Error("the queue is empty");
        }
        return this.queue[0];
    }
    size() { // return the size of the queue
        return this.queue.length;
    }
    isEmpty() { // check weather the queue is empty
        return this.queue.length === 0;
    }
    print() {
        console.log(this.queue.toString());
    }
}

module.exports = { Queue };