/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
   if (x===0) {
     return 0
   }
  const arr = [];
  let temp = x >= 0 ? x : -x;
   
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
  if (num > 2**31) {
    return 0;
  }
   return x > 0 ? num : -num;
};
// @lc code=end

