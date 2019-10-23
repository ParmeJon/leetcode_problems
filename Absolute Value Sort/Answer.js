function absSort(arr) {
  /**
	@param arr: integer[]
	@return: integer[]
	*/

  // your code goes here
  // leverages built in sort function
  return arr.sort((a, b) => {

    // My original way.
    // change the order of placing when values are equal
    // the original positive "a" will return 1 over the negative "b"
    // if (a >= 0 && b<0 && a === Math.abs(b)) {
    //   return 1;
    // }
    // return Math.abs(a) - Math.abs(b);

    // Return -1 if the absolute value is less
     if (Math.abs(a) < Math.abs(b)) {
       return -1
     }
    //  Return 1 if the absolute value is greater
     if (Math.abs(a) > Math.abs(b)) {
     return 1
     }
    //  since those two are false, it means the absolute values are equal
    // in that case we can just return a-b normally making the negative numbers 
    // less than the positive Number.
    return a - b
  });
}
