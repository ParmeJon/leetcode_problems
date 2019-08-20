// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
var merge = function(nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }
  nums1.sort((a, b) => a - b);
};

// Without built in sort. 
var merge = function(nums1, m, nums2, n) {
  let insertAt = m + n - 1;
  m--;
  n--;
//   Compare nums1 0 to m and nums2 0 to n and start adding backwards
  while (n >= 0) {
    //   the insertAt--, m--, n-- all happen after the initial calculation for that key in array.
    nums1[insertAt--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};
