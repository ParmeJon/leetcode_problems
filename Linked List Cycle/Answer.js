// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

var hasCycle = function(head) {
  while (head) {
    if (head.hasVisited) {
      return true;
    }

    head.hasVisited = true;
    head = head.next;
  }

  return false;
};