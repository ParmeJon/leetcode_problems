// /**
//  * @param {string} S
//  * @return {string[]}
//  */
var letterCasePermutation = function(S) {
  const output = [];

  const check = function(string, idx, substr) {
    if (substr.length === S.length) {
      output.push(substr);
      return;
    }
    for (let i = idx; i < string.length; i++) {
      if (string[i].match(/[a-z]/i)) {
        let low = string[i].toLowerCase();
        let up = string[i].toUpperCase();
        let lowSubStr = substr + low;
        let upSubStr = substr + up;
        check(S, i + 1, lowSubStr);
        check(S, i + 1, upSubStr);
      } else {
        substr += S[i];
      }
    }
    if (substr.length === S.length) {
      output.push(substr);
    }
  };

  check(S, 0, "");
  return output;
};
