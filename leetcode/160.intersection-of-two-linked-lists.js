/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let pa = headA;
  let pb = headB;
  while (pa !== pb) {
    pa = pa !== null ? pa.next : headB;
    pb = pb !== null ? pb.next : headA;
  }

  return pa;
  
};
// @lc code=end

