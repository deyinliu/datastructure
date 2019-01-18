function kill(head, m) {

}

function killNum(n, m) {
    let a = [2],
        b = 3;
    ction(a, b);
    console.log(a);
    let s = 0;
    for (let i = 2; i <= n; i++)
        s = (s + m) % i;
    return s + 1;
}

function ction(a, b) {
    a = a.push(b);
}

function kth(n, m) {
    let k = n - 1;
    if (m == 1) return n - 1;
    for (k = k * m + m - 1; k >= n; k = k - n + (k - n) / (m - 1));
    return Math.ceil(k);
}
console.log(killNum(2, 4));
console.log(kth(2, 4));