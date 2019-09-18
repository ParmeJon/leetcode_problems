// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} sum
//  * @return {boolean}
//  */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }

  function checkPaths(root, sum) {
    if (!root.left && !root.right && sum - root.val === 0) {
      return true;
    }
    if (!root.left && !root.right && sum - root.val !== 0) {
      return false;
    }

    let left = false;
    let right = false;
    if (root.left) {
      left = checkPaths(root.left, sum - root.val);
    }
    if (root.right) {
      right = checkPaths(root.right, sum - root.val);
    }

    return left || right;
  }

  return checkPaths(root, sum);
};
