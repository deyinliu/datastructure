/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0;
  let r = x;
  let n = 0;
  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    if (mid * mid <= x) {
      n = mid;
      l = mid + 1;
    } else {
      r = mid -1;
    }
  }
  return n;
};
console.log(mySqrt(8));
// @lc code=end

