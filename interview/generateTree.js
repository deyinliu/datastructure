class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function generateTree(arr) {
    if (arr.length == 0) {
        return null;
    }
    return generate(arr, 0, arr.length - 1);
}

function generate(arr, start, end) {
    if (start > end) {
        return null;
    }
    let mid = Math.ceil((start + end) / 2);
    let head = new Node(arr[mid]);
    head.left = generate(arr, start, mid - 1);
    head.right = generate(arr, mid + 1, end);
    return head;
}

console.log(generateTree([1, 2, 3, 4, 5]));