// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var removeDuplicates = function(nums) {
    for (let i = 1; i < nums.length; i++){
        if (nums[i-1] === nums[i]) {
            nums.splice(i, 1)
            i--
        }
    }
};


var removeDuplicates = function(nums) {
    // let unique = new Set(nums)
    nums.splice(0, nums.length, ...(new Set(nums) ))
};
