/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let header = null;
  let f1=l1, f2=l2;
  if (l1.val<l2.val) {
    header = l1;
    f1 = l1.next;
  } else {
    header = l2;
    f2 = l2.next;
  }
  let cur = header;
  while (f1 && f2) {
    if (f1.val<f2.val) {
      cur.next = f1;
      cur = f1;
      f1 = f1.next;
    } else {
      cur.next = f2;
      cur = f2;
      f2 = f2.next;
    }
  }
  if (f1) {
    cur.next = f1;
  }
  if (f2) {
    cur.next = f2;
  }
  return header;
};
// @lc code=end

