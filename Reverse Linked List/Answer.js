// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var reverseList = function(head, prev = null) {
  if (!head) {
    return prev;
  }

  let current = head;
  head = head.next;
  current.next = prev;

  return reverseList(head, current);
};
