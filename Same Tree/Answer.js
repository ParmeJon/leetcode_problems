// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} p
//  * @param {TreeNode} q
//  * @return {boolean}
//  */
var isSameTree = function(p, q) {
  let q1 = [p];
  let q2 = [q];

  while (q1.length && q2.length) {
    let q1item = q1.pop();
    let q2item = q2.pop();
    let check1;
    let check2;

    if (q1item) {
      check1 = q1item.val;
    } else {
      check1 = "null";
    }
    if (q2item) {
      check2 = q2item.val;
    } else {
      check2 = "null";
    }

    if (check1 !== check2) {
      return false;
    }
    if (q1item) {
      q1.push(q1item.left);
      q1.push(q1item.right);
    }
    if (q2item) {
      q2.push(q2item.left);
      q2.push(q2item.right);
    }
  }
  return true;
};
