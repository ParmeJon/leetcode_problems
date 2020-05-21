/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  let result = [];
  let counter = 0;
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i].split("").sort().join("");
    if (map[word] !== undefined) {
      result[map[word]].push(strs[i]);
    } else {
      map[word] = counter;
      result[counter] = [];
      result[counter].push(strs[i]);
      counter++;
    }
  }
  return result;
};
