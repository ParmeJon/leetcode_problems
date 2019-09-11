// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

var subsets = function(nums) {
  const solutions = [];
  const curSol = [];

  function helper(nums, start) {
    solutions.push(curSol.slice(0));
    for (var i = start; i < nums.length; i++) {
      curSol.push(nums[i]);
      helper(nums, i + 1);
      curSol.pop();
    }
  }
  helper(nums, 0);
  return solutions;
};
