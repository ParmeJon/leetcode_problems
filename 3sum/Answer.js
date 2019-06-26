// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var threeSum = function(nums) {
    let result = []

    if (nums.length < 3) {
        return result
    }

    nums = nums.sort((a,b) => a - b)
    const target = 0

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) {
            break;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let partTarget = target - nums[i]
        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let partSum = nums[j] + nums[k]
            if (partSum === partTarget) {
                result.push([nums[i], nums[j], nums[k]])
                while (nums[j]=== nums[j + 1]) {
                    j++
                }
                while (nums[k] === nums[k-1]) {
                    k--
                }
                j++
                k--
            } else if (partSum > partTarget) {
                k-= 1
            } else {
                j+= 1
            }
        }


    }
    return result
};
