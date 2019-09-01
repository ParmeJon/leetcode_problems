// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */

var findDisappearedNumbers = function(nums) {
  let len = nums.length;
  if (len === 0) {
    return [];
  }
  let arr = [];
  for (let i = Math.floor(len / 2); i < len + 1; i++) {
    let checkThis = len - i;
    if (checkThis !== 0 && !nums.includes(checkThis)) {
      arr.unshift(checkThis);
    }
    if (checkThis !== i && !nums.includes(i)) {
      arr.push(i);
    }
  }
  return arr;
};

// MUCH FAST n^2?

var findDisappearedNumbers = function(nums) {
  let obj = {};
  for (let i = 1; i < nums.length + 1; i++) {
    obj[i] = 1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      delete obj[nums[i]];
    }
  }
  return Object.keys(obj);
};


// SLOW
var findDisappearedNumbers = function(nums) {
  let arr = [];
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums.indexOf(i) === -1 && i !== 0) {
      arr.push(i);
    }
  }
  return arr;
};