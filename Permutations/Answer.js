// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
var permute = function(nums) {
  let result = [];

  const permute = (arr, m = []) => {
    console.log('mArray', m)
    if (arr.length === 0) {
      result.push(m)
        console.log('results changing', result)
    } else {
      for (let i = 0; i < arr.length; i++) {
          console.log('on this loop', i)
          console.log('on this arr', arr)
        let curr = arr.slice();
        let next = curr.splice(i, 1);
         console.log('curr', curr)
          console.log('next', next)
        permute(curr.slice(), m.concat(next))
          console.log('end of one loop')
     }
   }
 }

 permute(nums)

 return result;
};
