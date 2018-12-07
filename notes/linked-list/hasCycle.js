/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  let [fast, slow] = [head, head];
  while (slow && fast) {
    slow = slow.next;
    if (!fast.next || !fast.next.next) return false;
    fast = fast.next.next;
    if (fast.val === slow.val) return true;
  }
  return false;
};