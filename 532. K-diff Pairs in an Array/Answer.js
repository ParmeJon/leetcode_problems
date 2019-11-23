
var findPairs = function(nums, k) {
    if (k < 0) return 0

    let obj = {}
    let results = 0
    const n = nums.length

    for (let i = 0; i < n; i++) {
        if (obj[nums[i]]) {
            if (k == 0 && obj[nums[i]] == 1)
                results++
            obj[nums[i]] += 1
        } else {
            if (obj[nums[i] - k]) results++
            if (obj[nums[i] + k]) results++
            obj[nums[i]] = 1
        }
    }
    return results
};
