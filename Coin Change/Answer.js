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

// Top Down Approach
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = {0:0}
    function recurseChange(coins, amount, memo) {
        let min = Infinity
        if (amount === 0) {
            return 0
        }
        if (amount < 0) {
            return -1
        }
        if (memo[amount]) {
            return memo[amount]
        }
        
        for (let i = 0; i < coins.length; i++) {
            let result = recurseChange(coins, amount - coins[i], memo)
            if (result >= 0 && result < min) {
            min = result + 1
            }
        }
        
        if (min === Infinity) {
            memo[amount] = -1
        } else {
            memo[amount] = min
        }
        
        return memo[amount]
    }
    
    return recurseChange(coins, amount, memo)
};
