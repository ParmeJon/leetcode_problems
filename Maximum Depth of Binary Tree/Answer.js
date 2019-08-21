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

// Using Stack
var maxDepth = function(root) {
    if (root === null) {
      return 0;
    }
    const queue = [root, "lvl"];
    let depth = 1;
    while (queue.length > 1) {
      let node = queue.shift();
      if (node === "lvl") {
        depth++;
        queue.push(node);
      } else {
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
    return depth;
};

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};