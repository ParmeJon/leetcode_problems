// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function(numbers, target) {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] + numbers[i] > target) {
        break;
      } else if (numbers[j] + numbers[i] === target) {
        arr.push(i + 1);
        arr.push(j + 1);
        return arr;
      }
    }
  }
};
