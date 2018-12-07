/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let crt = head;
  let next;
  let prev = null;
  while (crt) {
    next = crt.next;
    crt.next = prev;
    prev = crt;
    crt = next;
  }
  return prev;
};