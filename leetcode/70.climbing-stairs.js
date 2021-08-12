/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function (n) {
  let ppre = 1;
  let pre = 2;
  if (n === 1) { 
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  for (let i = 0; i < n - 2; i++) {
    const temp = ppre + pre;
    ppre = pre;
    pre = temp;
  }
  return pre;
};
console.log(climbStairs(4));
// @lc code=end

