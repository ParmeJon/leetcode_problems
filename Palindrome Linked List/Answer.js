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
var isPalindrome = function(head) {
  if (!head || !head.next) {
    return true;
  }
  let slow = head;
  let fast = head;
  let firstHalf = "";
  let secondHalf = "";
  while (fast && fast.next) {
    firstHalf += slow.val;
    slow = slow.next;
    fast = fast.next.next;
    if (fast && !fast.next) {
      firstHalf += slow.val;
    }
  }
  while (slow) {
    secondHalf = slow.val.toString() + secondHalf;
    slow = slow.next;
  }
  return firstHalf === secondHalf;
};
