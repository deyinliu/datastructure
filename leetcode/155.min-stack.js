/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.minStack.length) {
    const top = this.minStack[this.minStack.length - 1];
    if (top>=val) {
      this.minStack.push(val);
    } else {
      this.minStack.push(top);
    }
  } else {
    this.minStack.push(val);
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const top = this.length - 1
  return this.stack[top];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1] || null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

