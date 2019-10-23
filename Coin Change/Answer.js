/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// WORKING BOTTOM UP APPROACH
var coinChange = function(coins, amount) {
    let max = amount + 1
    // create an array to keep track of the number of coins needed for each amt
    let dp = []
    // fill it with maxValue for return condition later.
    for (let i = 0; i < amount + 1; i++) {
        dp[i] = max
    }
    // it will always take 0 coins for 0 amt.
    dp[0] = 0

    // rebuild out dp array starting from amt 1
    for ( let i = 1; i <= amount; i++) {
      // check what coins are small enough to fit in amt
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
              // ex) i = 6 -> dp[6-3] + 1 -> dp[6] = dp[3] + 1
              // find the difference amt of the coin it'll be that previous amt of 
              // coins plus the one you just subtracted.
                dp[i] = Math.min(dp[i], dp[i-coins[j]] + 1)
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount]
};


[1, 2, 5];
100;

[3, 4, 6, 9];
16;