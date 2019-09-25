// /**
//  * @param {number} rowIndex
//  * @return {number[]}
//  */
var getRow = function(rowIndex) {
  let triangle = [[1], [1, 1]];
  let lastRow = triangle[triangle.length - 1];
  while (!triangle[rowIndex]) {
    let newArr = [1];
    for (let i = 0; i < lastRow.length; i++) {
      if (i === lastRow.length - 1) {
        newArr.push(1);
      } else {
        newArr.push(lastRow[i] + lastRow[i + 1]);
      }
    }
    triangle.push(newArr);
    lastRow = triangle[triangle.length - 1];
  }
  return triangle[rowIndex];
};
