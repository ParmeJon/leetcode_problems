// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var rob = function(nums) {
  //     Permutate indexes
  //     0, 1, 2, 3, 4
  //     0, 2, 4
  //     0, 3
  //     1, 3
  //     1, 4
  //     Then choose the max sum of all those permutations
};

// Bottom Up Approach
var rob = function(nums) {
    
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let maxAtTwoBefore = nums[0];
    let maxAtOneBefore = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
        
        maxAtTwoBefore = maxAtOneBefore;
        maxAtOneBefore = maxAtCurrent;
    }
    
    return maxAtOneBefore;
};
