// /**
//  * @param {number[]} height
//  * @return {number}
//  */

// BRUTE FORCE
var maxArea = function(height) {
  let largest = 0;
  let len = height.length;
  function checkLargest(idx) {
    for (let j = idx + 1; j < len; j++) {
      let minHeight = height[idx] > height[j] ? height[j] : height[idx];
      let width = j - idx;
      largest = Math.max(largest, minHeight * width);
    }
  }

  for (let i = 0; i < len; i++) {
    checkLargest(i);
  }
  return largest;
};

// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// TWO POINTERS APPROACH
var maxArea = function(height) {
    let maxArea = 0
    let start = 0
    let end = height.length - 1
    while ( start < end) {
        maxArea = Math.max(maxArea, Math.min(height[start], height[end]) * (end-start))
        if (height[start] < height[end]) {
            start++
        } else {
            end--
        }
    }
    return maxArea
};
