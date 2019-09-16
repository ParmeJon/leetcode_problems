// /**
//  * @param {number} x
//  * @return {boolean}
//  */
var isPalindrome = function(x) {
  let stringX = x.toString();
  let backCount = stringX.length - 1;
  for (let i = 0; i < stringX.length / 2; i++) {
    if (stringX[i] !== stringX[backCount]) {
      return false;
    }
    backCount--;
  }
  return true;
};
