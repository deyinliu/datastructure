class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isPostArray(arr) {
    if (arr.length == 0) {
        return false;
    }
    return isPost(arr, 0, arr.length - 1);
}

function isPost(arr, start, end) {
    if (start == end) {
        return true;
    }
    let low = -1;
    let big = end;
    for (let i = start; i < end; i++) {
        if (arr[end] > arr[i]) {
            low = i;
        } else {
            big = big == end ? i : big;
        }
    }
    if (low == -1 || big == end) {
        return isPost(arr, start, end - 1);
    }
    if (low != big - 1) {
        return false;
    }
    return isPost(arr, start, low) && isPost(arr, big, end - 1);
}

function toPost(arr) {
    if (arr.length == 0) {
        return null;
    }
    return arrayToPost(arr, 0, arr.length - 1);
}

function arrayToPost(arr, start, end) {
    if (start > end) {
        return null;
    }
    let head = new Node(arr[end]);
    let low = -1;
    let big = end;
    for (let i = start; i < end; i++) {
        if (arr[end] > arr[i]) {
            low = i;
        } else {
            big = big == end ? i : big;
        }
    }
    head.left = arrayToPost(arr, start, low);
    head.right = arrayToPost(arr, big, end - 1);
    return head;
}
let arr = [1, 3, 2, 5, 7, 6, 4];
console.log(isPostArray(arr));
let tree = toPost(arr);
console.log(tree.left);
console.log(tree.right);