// /**
//  * @param {string} A
//  * @param {string} B
//  * @return {boolean}
//  */
var buddyStrings = function(A, B) {
  let swapIndex = null;
  for (let i = 0, l = A.length; i < l; i++) {
    if (A[i] !== B[i]) {
      if (swapIndex === null) {
        swapIndex = i;
      } else if (A[swapIndex] === B[i] && A[i] === B[swapIndex]) {
        swapIndex = -1;
      } else {
        return false;
      }
    }
  }
  if (swapIndex === null) {
    const s = new Set(A);
    return A.length > s.size;
  } else {
    return swapIndex === -1;
  }
};
