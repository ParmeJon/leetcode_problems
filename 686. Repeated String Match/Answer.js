
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let count = 1;
    let s = A 
    while (s.length < B.length) {
        count++
        s = s + A
    }
    if (s.indexOf(B) >= 0) {
        return count
    }
    s = s + A 
    if (s.indexOf(B) >= 0) {
        return count + 1
    }
    return -1
};