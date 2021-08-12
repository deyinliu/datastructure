/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length;
  const temp = [];
  let add = 1;
  for (let i = len - 1; i >= 0; i--) {
    const n = digits[i];
    const sum = n + add;
    if (sum < 10) {
      add = 0;
      temp.unshift(sum);
    } else {
      temp.unshift(sum - 10);
    }
  }
  if (add) {
    temp.unshift(add);
  }
  return temp;
};
console.log(plusOne([8,9,9]));
// @lc code=end

