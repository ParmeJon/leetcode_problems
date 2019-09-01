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
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  const obj = { [head.val]: 1 };
  let prev = head;
  let curr = head.next;
  while (curr) {
    if (obj[curr.val]) {
      prev.next = curr.next;
      curr = prev.next;
    } else {
      obj[curr.val] = 1;
      prev = prev.next;
      curr = curr.next;
    }
  }
  return head;
};

// MORE Efficient, less memory and faster
var deleteDuplicates = function(head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.next.val === curr.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};