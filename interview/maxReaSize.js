const Stack = require("../structure/Stack.js").Stack;
class maxRect {
    constructor(matrix) {
        this.matrix = matrix;
        this.height = this.matrix[0].map(() => 0);
        this.max = 0;
        this.stack = new Stack();
    }
    getMax() {
        const that = this;
        this.matrix.forEach((ele, i) => {
            ele.forEach((item, j) => {
                that.height[j] = that.matrix[i][j] == 0 ? 0 : that.height[j] + 1;
            })
            that.max = that._getMax(that.height);
        });
        return this.max;
    }
    _getMax() {
        if (this.height === null || this.height.length == 0) {
            return 0;
        }
        const that = this;
        let j, k;
        this.height.forEach((ele, index) => {
            while (!that.stack.isEmpty() && that.height[that.stack.peak()] >= ele) {
                j = that.stack.pop();
                k = that.stack.isEmpty() ? -1 : that.stack.peak();
                that.max = Math.max(that.max, that.height[j] * (index - k - 1));
            }
            that.stack.push(index);
        });
        console.log(that.height);
        while (!this.stack.isEmpty()) {
            j = this.stack.pop();
            k = this.stack.isEmpty() ? -1 : this.stack.peak();
            this.max = Math.max(this.max, this.height[j] * (this.height.length - k - 1));
        }
        return this.max;
    }
}
const m = new maxRect([
    [1, 1, 0, 1],
    [0, 0, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1]
]);
console.log(m.getMax());