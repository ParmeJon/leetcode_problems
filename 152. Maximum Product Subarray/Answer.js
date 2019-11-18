// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var maxProduct = function(nums) {
  let maxProduct = -Infinity;
  let currentMax = 1;
  let currentMin = 1;
  for (let i = 0; i < nums.length; i++) {
    let prevMax = currentMax;
    currentMax = Math.max(nums[i], prevMax * nums[i], currentMin * nums[i]);
    currentMin = Math.min(nums[i], prevMax * nums[i], currentMin * nums[i]);
    maxProduct = Math.max(currentMax, maxProduct);
  }
  return maxProduct;
};
