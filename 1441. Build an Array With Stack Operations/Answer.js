/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let output = [];
  let counter = 1;
  for (let i = 0; i < target.length; i++) {
    if (target[i] === counter) {
      output.push("Push");
      counter++;
    } else {
      while (target[i] > counter) {
        output.push("Push");
        output.push("Pop");
        counter++;
      }
      output.push("Push");
      counter++;
    }
  }
  return output;
};
