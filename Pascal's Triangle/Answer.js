// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
var generate = function(numRows) {
  const pascal = {
    0: [],
    1: [[1]],
    2: [[1], [1, 1]]
  };
  let counter = 3;
  if (pascal[numRows]) {
    return pascal[numRows];
  }
  while (counter <= numRows) {
    let newArr = new Array(counter);
    newArr.fill(1);
    for (let i = 0; i < newArr.length; i++) {
      if (i !== 0 && i !== newArr.length - 1) {
        newArr[i] =
          pascal[counter - 1][counter - 2][i - 1] +
          pascal[counter - 1][counter - 2][i];
      }
    }
    pascal[counter] = [...pascal[counter - 1], newArr];
    counter++;
  }
  return pascal[numRows];
};
