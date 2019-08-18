// /**
//  * @param {number} n
//  * @return {boolean}
//  */
var isHappy = function(n) {
  let obj = {};
  let checkObj = {};

  function sumSquares(n) {
    if (obj[n]) {
      return obj[n];
    }
    let wordN = n.toString();
    let currSum = 0;
    for (let i = 0; i < wordN.length; i++) {
      let num = parseInt(wordN[i]);
      currSum += num * num;
    }
    obj[n] = currSum;
    return currSum;
  }

  let num = sumSquares(n);
  while (num !== 1) {
    if (checkObj[num] !== undefined) {
      return false;
    } else {
      checkObj[num] = false;
    }
    num = sumSquares(num);
  }
  return true;
};
