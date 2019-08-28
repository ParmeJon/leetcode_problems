// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
var sortColors = function(nums) {
  let x = 0;
  for (let i = 0; i < nums.length - x; i++) {
    if (nums[i] === 0) {
      nums.unshift(nums.splice(i, 1)[0]);
    } else if (nums[i] === 2) {
      nums.push(nums.splice(i, 1)[0]);
      i--;
      x++;
    }
  }
};
