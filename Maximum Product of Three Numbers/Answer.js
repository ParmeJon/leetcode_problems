// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// NAIVE solution
var maximumProduct = function(nums) {
  let maxProduct = -Infinity;

  function recurseMax(arr, int, product) {
    if (int === 3) {
      maxProduct = Math.max(product, maxProduct);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let newProduct = product * arr[i];
      let newInt = int + 1;
      let newArr = [...arr];
      newArr.splice(i, 1);
      recurseMax(newArr, newInt, newProduct);
    }
  }

  recurseMax(nums, 0, 1);
  return maxProduct;
};

// O(nLogn)
var maximumProduct = function(nums) {
  nums.sort((a, b) => b - a);
  return Math.max(
    nums[0] * nums[1] * nums[2],
    nums[0] * nums[nums.length - 2] * nums[nums.length - 1]
  );
};

// ONE PASS
var maximumProduct = function(nums) {
    let min1 = Infinity
    let min2 = Infinity 
    let max1 = -Infinity
    let max2 = -Infinity
    let max3 = -Infinity
    for ( const n of nums ) {
        if (n <= min1) {
            min2 = min1
            min1 = n
        } else if (n <= min2) {
            min2 = n      
        }
        
        if (n >= max1) {
            max3 = max2
            max2 = max1
            max1 = n
        } else if (n >= max2) {
            max3 = max2
            max2 = n
        } else if (n >= max3) {
            max3 = n
        }
    }
    return Math.max(min1 * min2 * max1, max1 * max2 * max3)
};