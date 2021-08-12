/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex < 0) {
    return [];
  }
  if (rowIndex === 0) {
    return [1]
  }
  const num = getRow(rowIndex - 1);
  const temp = [];
  for (let i = 0; i < rowIndex + 1; i++) {
    const prev = num[i - 1] ? num[i - 1] : 0;
    const next = num[i] ? num[i] : 0;
    temp.push(prev + next);
  }
  return temp;
};
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(30));
// @lc code=end

