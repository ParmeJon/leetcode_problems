// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var maxSubArray = function(nums) {
    let highestSum = nums[0]
    let currentSum = 0
    for (let i = 0; i < nums.length; i++) {
        if (currentSum < nums[i] && currentSum < 0) {
            currentSum = 0
        }
        currentSum += nums[i]
        if (currentSum >= highestSum){
            highestSum = currentSum
        }
    }
    return highestSum
};
