// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
var letterCombinations = function(digits) {
    let obj = {
        1: "",
        2: ['a','b','c'],
        3: ['d', 'e', 'f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
        0: [' ']
    }
    let result = []

    if (digits.length === 0) {
        return []
    } else if (digits.length === 1) {
        return obj[digits[0]]
    }

    function backtrack(nums, path_so_far) {
        if (nums.length === 0) {
            result.push(path_so_far)
            return
        }

        let firstLetter = nums[0]
        let rest = nums.slice(1)
        let letters = obj[firstLetter]
        for (let i = 0; i < letters.length; i++) {
            backtrack(rest, (path_so_far + letters[i]))
         }
    }

    backtrack(digits, "")

    return result

};
