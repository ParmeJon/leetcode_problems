// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var missingNumber = function(nums) {
  let fullSum = 0;
  let arraySum = 0;
  for (let i = 0; i < nums.length; i++) {
    fullSum += i + 1;
    arraySum += nums[i];
  }
  return fullSum - arraySum;
};
