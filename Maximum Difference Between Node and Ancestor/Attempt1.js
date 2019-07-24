/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
  let array = [root];
  let newArray = [];
  let topNum = root.val;
  let highestDiff = 0;
  while (array.length) {
    let targetNode = array.shift();
    if (targetNode) {
      console.log(targetNode.val);
      if (Math.abs(topNum - targetNode.val) > highestDiff) {
        highestDiff = Math.abs(topNum - targetNode.val);
      }
      newArray.push(targetNode.val);
      array.unshift(targetNode.left);
      array.unshift(targetNode.right);
    }
  }
  return highestDiff;
};
