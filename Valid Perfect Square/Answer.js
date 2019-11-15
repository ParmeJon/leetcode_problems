// /**
//  * @param {number} num
//  * @return {boolean}
//  */
var isPerfectSquare = function(num) {
  let i = 1;
  if (i * i === num) {
    return true;
  }
  while (i < num) {
    if (i * i === num) {
      return true;
    } else if (i * i > num) {
      return false;
    }
    i++;
  }
  return false;
};
