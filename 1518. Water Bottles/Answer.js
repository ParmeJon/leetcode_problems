/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let output = 0;
  return recurseWaterBottles(numBottles, 0, numExchange, output);
};

const recurseWaterBottles = (
  fullBottles,
  emptyBottles,
  numExchange,
  output
) => {
  if (fullBottles === 0 && emptyBottles < numExchange) {
    return output;
  }
  output += fullBottles;
  emptyBottles += fullBottles;
  fullBottles = 0;
  while (emptyBottles >= numExchange) {
    emptyBottles -= numExchange;
    fullBottles += 1;
  }
  return recurseWaterBottles(fullBottles, emptyBottles, numExchange, output);
};
