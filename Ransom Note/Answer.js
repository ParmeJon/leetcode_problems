/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const maxObj = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!maxObj[magazine[i]]) {
      maxObj[magazine[i]] = 1;
    } else {
      maxObj[magazine[i]] += 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!maxObj[ransomNote[i]] || maxObj[ransomNote[i]] <= 0) {
      return false;
    } else {
      maxObj[ransomNote[i]] -= 1;
    }
  }
  return true;
};
