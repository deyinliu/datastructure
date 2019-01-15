const Stack = require("../structure/Stack.js").Stack


function sortByStack(stack) {
    help = new Stack();
    let i = 0;
    while (!stack.isEmpty()) {
        let cur = stack.pop();
        while (!help.isEmpty() && cur > help.peak()) {
            stack.push(help.pop());
        }
        help.push(cur);
    }
    while (!help.isEmpty()) {
        stack.push(help.pop());
    }
}

const stack = new Stack();
stack.push(1);
stack.push(16);
stack.push(1);
stack.push(4);
stack.push(2);
stack.push(3);
stack.print();
sortByStack(stack);
stack.print();