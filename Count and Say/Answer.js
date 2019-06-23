// /**
//  * @param {number} n
//  * @return {string}
//  */
var countAndSay = function(n) {
    let counter = 2
    let answer = "11"
    if (n === 1) {
        return "1"
    }
    if (n === 2) {
        return "11"
    }
    while (counter < n) {
        answer = countNum(answer)
        counter++
    }
    return answer
};

function countNum(string) {
    let newString = ''
    let counting = 1
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i+1]) {
            counting++
        } else {
            newString += counting.toString()
            newString += string[i]
            counting = 1
        }
    }
    return newString
}
