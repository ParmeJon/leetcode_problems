/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  const sisterObj = {};
  let result = 0;
  let maxCandies = candies.length / 2;

  for (let i = 0; i < candies.length; i++) {
    if (result === maxCandies) {
      break;
    }
    if (!sisterObj[candies[i]] && result < maxCandies) {
      sisterObj[candies[i]] = 1;
      result++;
    }
  }
  return result;
};
