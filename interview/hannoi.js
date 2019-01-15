function hannoi(n, from, buff, to) {
    if (n == 1) {
        console.log(from + "->" + to);
    } else {
        hannoi(n - 1, from, to, buff);
        hannoi(1, from, buff, to);
        hannoi(n - 1, buff, from, to);
    }
}
hannoi(2, "A", "B", "C")