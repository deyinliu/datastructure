/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const needleLen = needle.length;
  const len = haystack.length;
  if (!needleLen) {
    return 0;
  }
  if (needleLen>len) {
    return -1;
  }

  const prefix = [-1,0];
  for (let i = 1; i < needleLen-1; i++) {
    const len = prefix.length;
    const prev = prefix[len - 1];
    if (needle[prev] === needle[i]) {
      prefix.push(prev + 1);
    } else {
      prefix.push(0);
    }
  }
  console.log(prefix);
  let i = 0;
  for (let j = 0; j < needleLen;) {
    const s = haystack[i];
    const p = needle[j] || needle[0];
    console.log(i,j); 
    if (s !== p) {
      j = prefix[j - 1];
    } else {
      j++;
    }
    i++;
    if (i >= len) {
      return -1
    }
  }
  
  return (i - needleLen);

  return -1;
};
console.log(strStr('aaaaaacb', 'aab'));
// @lc code=end

