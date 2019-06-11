// /**
//  * @param {string} s
//  * @return {number}
//  */
var romanToInt = function(s) {
    let count = 0
    let obj = {
        'I': 1,
        'V': 5,
       'X': 10,
        'L': 50, 
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && (s[i+1] === 'V' || s[i+1] === 'X')) {
            count += obj[s[i+1]] - obj[s[i]]
            i++
        } else if (s[i] === 'X' && (s[i+1] === 'L' || s[i+1] === 'C')){
            count += obj[s[i+1]] - obj[s[i]]
            i++
        } else if (s[i] === 'C' && (s[i+1] === 'D' || s[i+1] === 'M')) {
            count += obj[s[i+1]] - obj[s[i]]
            i++
        } else {
            count += obj[s[i]]
        }
    }
    return count
};
