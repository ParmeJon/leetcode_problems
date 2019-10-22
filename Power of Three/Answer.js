// /**
//  * @param {number} n
//  * @return {boolean}
//  */
var isPowerOfThree = function(n) {
  let x = 3;
  if (n === 1) {
    return true;
  }
  while (x < n) {
    x = x * 3;
  }
  return x === n;
};
