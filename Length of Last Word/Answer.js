// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLastWord = function(s) {
  let sArr = s.split(' ')
  let lastWord = sArr[sArr.length - 1]
  let count = 2
  while (lastWord === '') {
      lastWord = sArr[sArr.length - count]
      count++
  }
    if (lastWord === undefined) {
        return 0
    }
  return lastWord.length
};
