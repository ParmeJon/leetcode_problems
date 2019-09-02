// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */

// Inefficient WAY can be refactored
var diameterOfBinaryTree = function(root) {
  if (root === null || (!root.left && !root.right)) {
    return 0;
  }
  //     need longest of left and longest on right
  //     this returns longest path on a node.
  function longestLengthOfANode(node) {
    if (node === null) {
      return 0;
    }
    return Math.max(
      longestLengthOfANode(node.left) + 1,
      longestLengthOfANode(node.right) + 1
    );
  }
//   Chooses Largest Number Between, paths left and right of every node. 
  return Math.max(
    longestLengthOfANode(root.left) + longestLengthOfANode(root.right),
    diameterOfBinaryTree(root.left),
    diameterOfBinaryTree(root.right)
  );
};

// More efficient
var diameterOfBinaryTree = function(root) {
  let numberOfNodes = 0;
  function depth(node) {
    if (!node) {
      return 0;
    }
    let left = depth(node.left);
    let right = depth(node.right);
    numberOfNodes = Math.max(numberOfNodes, left + right);
    return Math.max(left, right) + 1;
  }

  depth(root);
  return numberOfNodes;
};
