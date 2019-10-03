/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let obj = {};
  let result = new Set();
  for (let i = 0; i < nums1.length; i++) {
    let key = nums1[i];
    if (!obj[key]) {
      obj[key] = 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    let key = nums2[i];
    if (obj[key]) {
      result.add(key);
    }
  }
  return [...result];
};
