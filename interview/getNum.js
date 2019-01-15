class getNum {
    constructor(arr, num) {
        this.arr = arr;
        this.min = [];
        this.max = [];
        this.num = num;
    }

    getNum() {
        const that = this;
        let sum = 0,
            j = 0
        that.arr.forEach((ele, index) => {
            while (j < that.arr.length) {
                while (that.min.length != 0 && that.arr[j] <= that.min[that.min.length - 1]) {
                    that.min.pop();
                }
                that.min.push(j)
                while (that.max.length != 0 && that.arr[j] >= that.max[that.max.length - 1]) {
                    that.max.pop();
                }
                that.max.push(j);
                if (that.arr[that.max[0]] - that.arr[that.min[0]] > that.num) {
                    break;
                }
                j++;
            }
            if (that.min[0] == index) {
                that.min.shift();
            }
            if (that.max[0] == index) {
                that.max.shift();
            }
            sum += j - index;
            console.log(j - index);
        });
        return sum;
    }
}

n = new getNum([1, 2, 3, 4, 5], Infinity);
console.log(n.getNum());