/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows<1) {
    return [];
  }
  const num = [[1]];
  for (let i = 1; i < numRows; i++){
    const top = num[i - 1];
    const temp = [];
    for (let j = 0; j < i + 1; j++) {
      const prev = top[j - 1] ? top[j - 1] : 0;
      const next = top[j] ? top[j] : 0;
      temp[j] = prev + next;
    }
    num.push(temp);
  }
  return num;
};
console.log(generate(5));
// @lc code=end

