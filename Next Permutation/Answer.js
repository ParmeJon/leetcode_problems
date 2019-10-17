// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
var nextPermutation = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > nums[i-1]) {
            let swapA = nums[i-1]
            let currIdx = i
            while (swapA < nums[currIdx]) {
                currIdx += 1
            }
//             currIdx - 1 will be the number just greater than swapA
            nums[i-1] = nums[currIdx - 1]
            nums[currIdx - 1] = swapA
            // console.log("idx", i)
            // console.log("half end", (i + (nums.length-i)/2))
            for (let j = i; j < (i + (nums.length-i)/2); j++) {
                // console.log(j, nums.length-1-(j-i))
                let temp = nums[j]
                nums[j] = nums[nums.length-1-(j-i)]
                nums[nums.length-1-(j-i)] = temp    
            }
            return;
        }
    }
    for (let i=0; i < nums.length/2; i++) {
        let temp = nums[i]
        nums[i] = nums[nums.length-1-i]
        nums[nums.length-1-i] = temp    
    }
    
};
