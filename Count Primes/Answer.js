// /**
//  * @param {number} n
//  * @return {number}
//  */

// ATTEMPT 1 TIME EXCEEDED
var countPrimes = function(n) {
  let mainCount = 2;
  const prime = {
    1: false,
    2: true,
    3: true
  };
  let primeCounter = 0;

  function isPrime(n) {
    let count = 2;
    let factors = 0;
    if (prime[n] !== undefined) {
      return prime[n];
    } else {
      while (count < n) {
        if (n % count === 0) {
          prime[n] = false;
          return false;
        }
        count++;
      }
      prime[n] = true;
      return true;
    }
  }

  while (mainCount < n) {
    if (isPrime(mainCount)) {
      primeCounter++;
    }
    mainCount++;
  }
  return primeCounter;
};

// ATTEMPT 2?

var countPrimes = function(n) {
  if (n <= 2) return 0;
  if (n === 3) return 1;

  let nonPrimeNums = new Array(n).fill(false);
  let counter = 0;

  for (let i = 2; i < n; i++) {
    if (nonPrimeNums[i]) continue;
    counter += 1;

    for (let j = 2; j < n; j++) {
      let num = i * j;
      if (num >= n) break;
      nonPrimeNums[num] = true;
    }
  }

  return counter;
};
