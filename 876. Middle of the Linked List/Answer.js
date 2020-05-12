/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let normalSpeed = head;
  let twoSpeed = head;
  while (twoSpeed && twoSpeed.next) {
    twoSpeed = twoSpeed.next.next;
    normalSpeed = normalSpeed.next;
  }
  return normalSpeed;
};
