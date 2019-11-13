// /**
//  * @param {number[]} flowerbed
//  * @param {number} n
//  * @return {boolean}
//  */
var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
        flowerbed[i] = 1;
        n--;
      }
    } else {
      continue;
    }
  }
  return n <= 0;
};
