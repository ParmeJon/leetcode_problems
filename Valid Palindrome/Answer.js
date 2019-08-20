// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// Attempt 1
var isPalindrome = function(s) {
  if (s.length === 1) {
    return true;
  }
  let lowerS = s.toLowerCase();
  let backCount = lowerS.length - 1;
  for (let i = 0; i < lowerS.length; i++) {
    console.log(lowerS[i]);
    while (!lowerS[i].match(/^[0-9a-zA-Z]+$/) && i < lowerS.length - 1) {
      i++;
    }
    while (!lowerS[backCount].match(/^[0-9a-zA-Z]+$/) && backCount > 0) {
      backCount--;
    }
    if (backCount <= i) {
      break;
    }
    if (lowerS[i] !== lowerS[backCount]) {
      return false;
    }
    backCount--;
  }
  return true;
};
