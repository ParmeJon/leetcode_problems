// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
var searchInsert = function(nums, target) {
    let idx = nums.indexOf(target)
    if (idx !== -1) {
        return idx
    }
    if (nums[nums.length - 1] < target) {
        return nums.length
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i
        }
    }
};
