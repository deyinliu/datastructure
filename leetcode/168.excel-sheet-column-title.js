/*
 * @lc app=leetcode id='168', lang=javascript
 *
 * ['168',] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  const map = {
    1:'A',
    2:'B',
    3:'C',
    4:'D',
    5:'E',
    6:'F',
    7:'G',
    8:'H',
    9:'I',
    10:'J',
    11:'K',
    12:'L',
    13:'M',
    14:'N',
    15:'O',
    16:'P',
    17:'Q',
    18:'R',
    19:'S',
    20:'T',
    21:'U',
    22:'V',
    23:'W',
    24:'X',
    25:'Y',
    26:'Z',
  }
  const arr = [];
  let cur = columnNumber;
  while (cur > 0) {
    const remain = cur % 26;
    if (remain === 0) {
      arr.unshift(map[26]);
      cur = Math.floor((cur - 1) / 26);
    } else {
      arr.unshift(map[remain]);
      cur = Math.floor(cur / 26);
    }
    
  }
  return arr.join('');
};
console.log(convertToTitle(701))
// @lc code=end

