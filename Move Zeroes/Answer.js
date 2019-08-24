// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1));
      i--;
    }
  }
};

// Accepted flattened array.
var moveZeroes = function(nums) {
  let x = 0;
  for (let i = 0; i < nums.length - x; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
      i--;
      x++;
    }
  }
};