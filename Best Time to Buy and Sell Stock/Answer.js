// /**
//  * @param {number[]} prices
//  * @return {number}
//  */

// BRUTE FORCE?
var maxProfit = function(prices) {
  let smallNum = Number.POSITIVE_INFINITY;
  let bestProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < smallNum) {
      for (let x = i + 1; x < prices.length; x++) {
        if (prices[x] - prices[i] > bestProfit) {
          bestProfit = prices[x] - prices[i];
        }
      }
    }
  }
  return bestProfit;
};


// /**
//  * @param {number[]} prices
//  * @return {number}
//  */

// ONE PASS.
var maxProfit = function(prices) {
   let smallNum = Number.POSITIVE_INFINITY
   let bestProfit = 0
   for (let i = 0; i < prices.length; i++) {
      if (prices[i] < smallNum) {
          smallNum = prices[i]
      } else if (prices[i] - smallNum > bestProfit) {
          bestProfit = prices[i] - smallNum
      }
   }
    return bestProfit
};