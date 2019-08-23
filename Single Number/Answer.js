// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var singleNumber = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      delete obj[nums[i]];
    } else {
      obj[nums[i]] = true;
    }
  }
  return Object.keys(obj)[0];
};

// Slight refactor
var singleNumber = function(nums) {
  let obj = {};
  nums.forEach(num => {
    if (obj[num]) {
      delete obj[num];
    } else {
      obj[num] = true;
    }
  });
  return Object.keys(obj)[0];
};

// Involving bitwise operator ^
function singleNumber(nums) {
  return nums.reduce((prev, curr) => prev ^ curr, 0);
}