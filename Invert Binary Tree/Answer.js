// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */
var invertTree = function(root) {
  if (!root) {
    return root;
  }
  let left = root.left;
  let right = root.right;
  root.left = right;
  root.right = left;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
