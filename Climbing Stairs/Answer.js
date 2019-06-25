// /**
//  * @param {number} n
//  * @return {number}
//  */

// Slow recursive way.
var climbStairs = function(n) {
    const steps = [1,2]
    let waysToStep = 0

    function step(num) {

        for (let i = 0; i < steps.length; i++) {
            let newNum = num
            newNum -= steps[i]
            if (newNum === 0) {
                waysToStep += 1
                return
            } else if (newNum < 0) {
                return
            } else {
                step(newNum)
            }
        }
    }

    step(n)
    return waysToStep
};

// recursion with memoization

var climbStairs = function(n) {
    let obj = {}
    return climb(0, n, obj)
};

function climb(num1, num2, obj) {
    if (num1 > num2) {
        return 0
    }
    if (num1 === num2) {
        return 1
    }
    if (obj[num1] > 0) {
        return obj[num1]
    }
    obj[num1] = climb(num1+1, num2, obj) + climb(num1+2, num2, obj);
    return obj[num1]
}

// dynamic programming
//
// /**
//  * @param {number} n
//  * @return {number}
//  */
var climbStairs = function(n) {
    if (n === 1) {
        return 1
    }
    let obj = {
        1: 1,
        2: 2
    }
    for (let i = 3; i <= n; i++) {
        obj[i] = obj[i-1] + obj[i-2]
    }
    return obj[n]
};
