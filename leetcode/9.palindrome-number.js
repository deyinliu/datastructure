/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x<0) {
    return false;
  }
  let temp = x;
   
  while (temp > 0) {
    arr.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  let num = 0
  const len = arr.length;
  for (let i = len-1; i >=0; i--) {
    const item = arr[i];
    num += item * 10 ** (len - i - 1);
  }
  return num === x;
};
// @lc code=end

