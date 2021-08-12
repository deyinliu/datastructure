/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const len = s.length;
  let last = len - 1;
  let i = 0;
  const regx = /[a-zA-Z0-9]/
  while (i < len && i <= last) {
    const left = s[i];
    const right = s[last];

    if (!regx.test(left)) {
      i++;
    }else if (!regx.test(right)) {
      last--;
    } else {
      if (right.toLowerCase() === left.toLowerCase()) {
        last--;
        i++
      } else {
        return false;
      }
    } 
  }
  return true;
};
console.log(isPalindrome("race a car"))
// @lc code=end

