/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
//   if (nums.length <= 1) {
//     return true;
//   }
  let changes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      changes++;
      if (nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]) {
        return false;
      }
    }
  }
  if (changes > 1) {
    return false;
  }
  return true;
};
