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
var mergeTwoLists = function(l1, l2) {
    let node
    if (l1 === null && l2) {
        return l2
    } else if (l2 === null && l1) {
        return l1
    } else if (l1 === null && l2 === null) {
        return null
    }

    if (l1.val <= l2.val)  {
        node = l1
        l1 = l1.next
    }  else if (l2.val < l1.val) {
        node = l2
        l2 = l2.next
    }
    let topNode = node

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            node.next = l1
            l1 = l1.next
        } else if (l1.val > l2.val) {
            node.next = l2
            l2 = l2.next
        }
        node = node.next
    }

    if (l1) {
        node.next = l1
    }
    if (l2) {
        node.next = l2
    }


    return topNode
};
