/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const len = s.length;
  let hasWord = false;
  let num = 0;
  for (let i = len-1; i >=0; i--) {
    const item = s[i];
    if (hasWord) {
      if (item !== ' ') {
        num += 1;
      } else {
        return num;
      }
    } else {
      if (item !== ' ') {
        hasWord = true;
        num += 1;
      }
    }
    
  }
  return num;
};
//console.log(lengthOfLastWord(' fasf'));
// @lc code=end

