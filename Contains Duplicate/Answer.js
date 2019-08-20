// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
var containsDuplicate = function(nums) {
    let numsSet = new Set(nums)
    if (nums.length !== numsSet.size) {
        return true
    } else {
        return false
    }
};
