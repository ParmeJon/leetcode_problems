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
//  * @return {number}
//  */

// ATTEMPT 1
var pathSum = function(root, sum) {
  let paths = 0;
  const routeLog = [];
  function checkPaths(root, gatheredVal, newWord, direction = null) {
    if (!root) {
      return;
    }

    let newVal = root.val + gatheredVal;
    newWord += gatheredVal.toString();
    newWord += direction;

    if (newVal === sum && !routeLog.includes(newWord)) {
      console.log(root.val);
      routeLog.push(newWord);
      console.log(routeLog);
      paths++;
    }
    checkPaths(root.left, newVal, newWord, "L");
    checkPaths(root.left, 0, "", "L");
    checkPaths(root.right, newVal, newWord, "R");
    checkPaths(root.right, 0, "", "R");
  }
  checkPaths(root, 0, "");
  return paths;
};

// ACTUAL

var pathSum = function(root, sum, presums = { "0": 1 }, prev = 0) {
  if (!root) return 0;
  let curr = prev + root.val;
  presums[curr] = (presums[curr] || 0) + 1;
  let res = (presums[curr - sum] || 0) - !sum;
  res +=
    pathSum(root.left, sum, presums, curr) +
    pathSum(root.right, sum, presums, curr);
  presums[curr]--;
  return res;
};

// Another
function pathSum(root, sum) {
  let result = 0;

  const addToSum = function(node, subSum) {
    if (!node) return;
    subSum += node.val;
    if (subSum === sum) result++;
    addToSum(node.left, subSum);
    addToSum(node.right, subSum);
  };

  const traverseTree = function(node) {
    if (!node) return;
    addToSum(node, 0);
    traverseTree(node.left);
    traverseTree(node.right);
  };

  traverseTree(root);

  return result;
}