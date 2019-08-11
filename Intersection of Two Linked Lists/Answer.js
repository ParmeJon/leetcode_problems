// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */
var getIntersectionNode = function(headA, headB) {
  const obj = {};
  while (headA) {
    obj[headA.val] = headA;
    headA = headA.next;
  }

  while (headB) {
    if (obj[headB.val] === headB) {
      return headB;
    }
    headB = headB.next;
  }
};
