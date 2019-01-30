function recursive(i) {
    if (i < 1) {
        return 0;
    }
    console.log("in:", i);
    let a = i - 1;
    // let b = i - 1;
    recursive(a);
    // recursive(b);
    console.log("a:", a, new Date().getTime());
    // console.log("b:", b, new Date().getTime());
}

function hannuo(n, from, buff, to) {
    if (n == 1) {
        console.log(from, "->", to);
        return;
    } else {
        hannuo(n - 1, from, to, buff);
        hannuo(1, from, buff, to);
        hannuo(n - 1, buff, from, to);
    }
}
hannuo(5, "A", "B", "C");