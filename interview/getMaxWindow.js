class getMaxWindow {
    constructor(arr, window) {
        this.arr = arr;
        this.window = window;
    }
    getMax() {
        const res = [];
        const maxIndex = [];
        const arr = this.arr;
        const w = this.window;
        arr.forEach((ele, index) => {
            while (maxIndex.length > 0 && arr[maxIndex[maxIndex.length - 1]] <= ele) {
                maxIndex.pop();
            }
            maxIndex.push(index);
            if (index - w == maxIndex[0]) {
                maxIndex.shift();
            }
            if (index >= w - 1) {
                res.push(arr[maxIndex[0]]);
            }
        });
        return res;
    }
}

const m = new getMaxWindow([4, 3, 5, 4, 3, 3, 6, 7], 3);
console.log(m.getMax());