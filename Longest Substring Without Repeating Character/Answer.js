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

// ONE LOOP
// Based on indexes
var lengthOfLongestSubstring = function(s) {
  var sLen = s.length,
    maxLen = 0,
    maxStr = "",
    tmpStr,
    posIndex,
    i;

  for (i = 0; i < sLen; i++) {
    tmpStr = s[i];
    posIndex = maxStr.indexOf(tmpStr);

    if (posIndex > -1) {
      maxStr = maxStr.substring(posIndex + 1);
    }

    maxStr += tmpStr;
    maxLen = Math.max(maxLen, maxStr.length);
  }

  return maxLen;
};

// Another way with changing start. 
var lengthOfLongestSubstring = function(s) {
    let start = 0
    let obj = {}
    let maxLen = 0
    
    
    for (let i = 0; i < s.length ; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = i
        } else {
            if (obj[s[i]] + 1 > start ) {
                start = obj[s[i]] + 1
            }
            obj[s[i]] = i
        }
        maxLen = Math.max(maxLen, i+1 - start)
    }
    
    return maxLen
};