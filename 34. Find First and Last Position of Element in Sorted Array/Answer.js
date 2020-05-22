/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function findIdx(nums, target, left) {
    let low = 0;
    let high = nums.length;
    while (low < high) {
      let midPt = Math.floor((low + high) / 2);
      if (nums[midPt] > target || (left && target === nums[midPt])) {
        high = midPt;
      } else {
        low = midPt + 1;
      }
    }
    return low;
  }

  let leftIdx = findIdx(nums, target, true);

  if (leftIdx === nums.length || nums[leftIdx] !== target) {
    return [-1, -1];
  }

  let rightIdx = findIdx(nums, target, false) - 1;
  return [leftIdx, rightIdx];
};
