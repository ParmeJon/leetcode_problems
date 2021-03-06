// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(0)
    let output = node
    let carry = 0
    let sum = 0

    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }

        if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }

        if (sum >= 10) {
            carry = 1
            sum = sum % 10
        }


        node.next = new ListNode(sum)
        node = node.next

        sum = carry
        carry = 0

    }
    return output.next

};
