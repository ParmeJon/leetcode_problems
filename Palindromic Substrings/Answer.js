/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0;

  function countPal(leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < s.length && s[leftIdx] === s[rightIdx]) {
      count++;
      leftIdx--;
      rightIdx++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    count++;
    countPal(i - 1, i + 1);
    countPal(i, i + 1);
  }
  return count;
};
