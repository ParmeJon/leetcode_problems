/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// Own attempt
var wordBreak = function(s, wordDict) {
  let memo = {};
  const wordSet = new Set(wordDict);

  function recurseLook(s) {
    if (s === "") {
      memo[s] = true;
      return true;
    }
    if (memo[s] !== undefined && memo[s]) {
      return true;
    }
    if (memo[s] !== undefined && memo[s] === false) {
      return false;
    }

    for (let i = 1; i <= s.length; i++) {
      if (wordSet.has(s.substr(0, i)) && recurseLook(s.substr(i, s.length))) {
        memo[s.substr(0, i)] = true;
        return true;
      }
      memo[s.substr(0, i)] = false;
    }
    return false;
  }

  return recurseLook(s);
};



// Working
var wordBreak = function(s, wordDict) {
  var t = [];

  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j <= i; j++) {
      var word = s.slice(j, i + 1);
      if (wordDict.has(word) && (j == 0 || t[j - 1] == true)) {
        t[i] = true;
      }
    }
  }

  return t[s.length - 1] || false;
};