/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  const len = strs.length;
  const first = strs[0] || '';
  const firstL = first.length;
  let str = ''
  for (let i = 0; i < firstL; i++) {
    const s = first[i];
    let flag = true;
    for (let j = 0; j < len; j++) {
      const item = strs[j];
      if (item) {
        if (item[i] !== s) {
          flag = false;
          break;
        }
      } else {
        return str;
      } 
    }
    if (!flag) {
      return str;
    } else {
      str += s;
    }
  }
  return str;
};
// @lc code=end

