// /**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
var combinationSum = function(candidates, target) {
  let solution = [];
  //     backtracing problem.
  const checkCan = function(result, idx, currArr) {
    if (result < 0) {
      return;
    }
    if (result === 0) {
      // need to do slice to make a new copy. Otherwise we will just get the same
      // array manipulated/pushed multiple times.
      solution.push(currArr.slice());
    }

    for (let i = idx; i < candidates.length; i++) {
      currArr.push(candidates[i]);
      // infinitely checks until base cases are hit. 
      checkCan(result - candidates[i], i, currArr);
      currArr.pop();
    }
  };
  checkCan(target, 0, []);
  return solution;
};
