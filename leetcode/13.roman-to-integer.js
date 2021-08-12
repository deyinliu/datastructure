/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const transfer = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const len = s.length;
  let num = 0;
  for (let i = len-1; i >0; i--) {
    const pre = transfer[s[i - 1]];
    const next = transfer[s[i]];
    if (next>pre) {
      num += next - pre;
      i--
    } else {
      num += next;
    }
  }
  return num;
};
// @lc code=end

