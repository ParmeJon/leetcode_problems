/**
 * @param {string} s
 * @return {number}
 */

//  BRUTE FORCE
var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let len = 1;

  if (s === "") {
    return 0;
  }

  function checkLongest(idx) {
    let obj = {};
    let newLen = 0;
    while (idx >= 0 && !obj[s[idx]]) {
      obj[s[idx]] = 1;
      newLen += 1;
      idx--;
    }
    if (newLen > len) {
      len = newLen;
    }
  }

  for (let i = 0; i < s.length; i++) {
    checkLongest(i);
  }

  return len;
};
