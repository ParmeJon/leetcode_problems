/**
 * @param {number[]} nums
 * @return {number}
 */
// ATTEMPT 1
var findUnsortedSubarray = function(nums) {
  let bigI = 0;
  let start = Infinity;
  let end = 0;
  if (nums.length === 1) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] < nums[i]) {
      //           extra -1 to account for size
      let track = i;
      while (nums[track] > nums[i + 1] || nums[track] === nums[i]) {
        track--;
      }
      if (track < start) {
        start = track;
      }
      bigI = nums[i];
    }
  }
  for (let i = start; i < nums.length; i++) {
    if (nums[i] < bigI) {
      end = i;
    } else if (nums[i + 1] < nums[i]) {
      end = i + 1;
      if (nums[i] > bigI) {
        bigI = nums[i];
      }
    }
  }
  console.log(end, start);
  if (start === Infinity) {
    return 0;
  }
  return end - start;
};