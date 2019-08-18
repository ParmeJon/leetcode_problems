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

// Recursively
var reverseList = function(head, prev = null) {
  if (!head) {
    return prev;
  }

  let current = head;
  head = head.next;
  current.next = prev;

  return reverseList(head, current);
};

// Iteratively

var reverseList = function(head) {  
    let prev = null
    let curr = head
    while (curr !== null) {
        let nextTemp = curr.next
        curr.next = prev
        prev = curr
        curr = nextTemp
    }
    return prev
};
