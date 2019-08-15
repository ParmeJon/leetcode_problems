// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */

// ITERATIVELY 
var isSymmetric = function(root) {
  const stack = [root, "level"];
  let values = [];
  while (stack.length !== 0 || stack[0] === "level") {
    let node = stack.shift();
    if (node) {
      values.push(node.val);
      stack.push(node.left);
      stack.push(node.right);
    } else {
      values.push("null");
    }
    if (stack[0] === "level") {
      for (let i = 0; i < values.length; i++) {
        if (values[i] !== values[values.length - 1 - i]) {
          return false;
        }
      }
      values = [];
      stack.push(stack.shift());
    }
  }
  return true;
};

// RECURSIVE
var isSymmetric = function(root) {
  return isEqual(root, root);
};

function isEqual(tree1, tree2) {
  if (!tree1 && !tree2) return true;

  if (!tree1 || !tree2 || tree1.val !== tree2.val) return false;

  return isEqual(tree1.left, tree2.right) && isEqual(tree1.right, tree2.left);
}