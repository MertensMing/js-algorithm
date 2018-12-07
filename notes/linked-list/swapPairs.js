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
const swapPairs = function(head) {
  let crt = head;
  let prev = null;
  let next = null;
  let next2 = null;
  if (crt && crt.next) {
    head = crt.next;
  }
  while (crt && crt.next) {
    next = crt.next;
    next2 = crt.next.next;
    crt.next = next2;
    next.next = crt;
    if (prev) {
      prev.next = next;
    }
    prev = crt;
    crt = next2;
  }
  return head;
};