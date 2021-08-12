/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const len = s.length
  const stack = [s[0]];
  const map = {
    "(":")",
    "[":"]",
    "{":"}",
  }
  for (let i = 1; i < len; i++) {
    const item = s[i];
    if (stack.length) {
      
      if (map[item]) {
        stack.push(item);
      } else {
        const top = stack.pop();
        if (item !== map[top]) {
          return false;
        }
      }
      
    } else {
      stack.push(item);
    }
  }
  return stack.length === 0;
};
// @lc code=end

