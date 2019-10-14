// /**
//  * @param {number} candies
//  * @param {number} num_people
//  * @return {number[]}
//  */
var distributeCandies = function(candies, num_people) {
  const peopleArr = new Array(num_people).fill(0);
  let increment = 1;
  while (candies > 0) {
    for (let i = 0; i < peopleArr.length; i++) {
      if (increment <= candies) {
        peopleArr[i] = peopleArr[i] + increment;
        candies -= increment;
        increment++;
      } else {
        peopleArr[i] = peopleArr[i] + candies;
        candies = 0;
      }
    }
  }
  return peopleArr;
};
