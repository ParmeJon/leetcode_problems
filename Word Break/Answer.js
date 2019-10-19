/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// First attempt
var wordBreak = function(s, wordDict) {
  //     BASE CASE
  if (s.length === 0) {
    return true;
  }
  //     check if a word is found in s
  let notFound = true;
  for (let i = 0; i < wordDict.length; i++) {
    let wordIdx = s.indexOf(wordDict[i]);
    if (wordIdx > -1) {
      notFound = false;
    }
  }
  if (notFound) {
    return false;
  }

  let firstReplace = wordDict.shift();
  wordDict.push(firstReplace);
  // console.log(s)
  // console.log(wordDict)
  return wordBreak(s.replace(firstReplace, ""), wordDict);

  //     removes the first aailable word.
  // function findAndRemove(string) {
  //     for (let i = 0; i < wordDict.length; i++) {
  //         let wordIdx = string.indexOf(wordDict[i])
  //         if (wordIdx > -1) {
  //             return string.replace(wordDict[i], "")
  //         }
  //     }
  // }
};


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