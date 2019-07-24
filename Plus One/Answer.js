// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
var plusOne = function(digits) {
    let carry = 1
    let newArray = []
    while (carry === 1 || digits.length) {
        let num = (digits.pop() || 0) + carry
        carry = 0
        if (num > 9) {
            carry = 1
            num -= 10
        }
        newArray.unshift(num) 
    }
    return newArray
};

