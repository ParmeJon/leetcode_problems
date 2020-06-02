/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

function convert(string) {
  let count = 0;
  let track = {};
  let newPattern = "";
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (track[letter] === undefined) {
      newPattern += count;
      track[letter] = count;
      count++;
    } else {
      newPattern += track[letter];
    }
  }
  return newPattern;
}

var wordPattern = function (pattern, str) {
  return convert(pattern) === convert(str.split(" "));
};
