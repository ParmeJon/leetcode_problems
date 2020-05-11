/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let mainHead = head;
  let nHead = head;
  let i = 0;
  while (i < n && nHead) {
    nHead = nHead.next;
    i++;
  }
  if (nHead) {
    while (nHead.next) {
      mainHead = mainHead.next;
      nHead = nHead.next;
    }
    mainHead.next = mainHead.next.next;
  } else {
    head = mainHead.next;
  }
  return head;
};
