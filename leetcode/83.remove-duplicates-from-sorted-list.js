/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
var deleteDuplicates = function(head) {
  let cur = head;
  let flag = null;
  
  while (cur && cur.next) {
    const next = cur.next;
    if (cur.val !== next.val) {
      if (flag) {
        flag.next = next;
        cur.next = null;
        flag = null;
      }
    } else {
      if (!flag) {
        flag = cur;
      }
    }
    cur = next;
  }
  
  if (flag) {
    flag.next = null;
    cur.next = null;
    flag = null;
  }
  return head;
};
const a = [];
let head = new ListNode(a[0], null)
let cur = head;
for (let i = 1; i < a.length; i++) {
  const item = new ListNode(a[i], null);
  cur.next = item;
  cur = cur.next;
}

console.log(deleteDuplicates(head));
// @lc code=end

