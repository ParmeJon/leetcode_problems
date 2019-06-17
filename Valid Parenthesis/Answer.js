var isValid = function(s) {
    if (s === '') {
        return true
    }
    let newWord = ''
    let obj = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i+1] === obj[s[i]] ) {
            newWord += s.slice(0, i)
            newWord += s.slice(i+2)
            return isValid(newWord)
            break;
        }
    }
    return false

};

// more efficient
//
// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function(s) {
    if (s === '') {
        return true
    }
    let stack = []
    let obj = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] !== undefined) {
            stack.push(s[i])
        } else if (s[i] !== obj[stack.pop()]) {
            return false
        }
    }
    return stack.length === 0 ? true : false

}
