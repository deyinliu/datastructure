/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const aLen = a.length, bLen = b.length;
  let add = 0;
  let str = []
  let i = aLen - 1, j = bLen - 1;

  while (i >= 0 || j >= 0) {
    let ai = 0, bi = 0;
    if (i >= 0) {
      ai = parseInt(a[i]);
    }
    if (j >= 0) {
      bi = parseInt(b[j]);
    }
    const sum = ai + bi + add;

    if (sum < 2) {
      add = 0;
      str.unshift(sum)
    } else {
      str.unshift(sum - 2);
      add = 1;
    }
    i--;
    j--;
  }
  if (add) {
    str.unshift(add);
  }
  return str.join('');
};
console.log(addBinary('1010', '1011'));
// @lc code=end

