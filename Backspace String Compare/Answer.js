// /**
//  * @param {string} S
//  * @param {string} T
//  * @return {boolean}
//  */

// Solving with stacks.
var backspaceCompare = function(S, T) {
  let stackS = [];
  let stackT = [];

  function endResult(stack, string) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "#") {
        stack.pop();
      } else {
        stack.push(string[i]);
      }
    }
  }

  endResult(stackS, S);
  endResult(stackT, T);
  return stackS.join("") === stackT.join("");
};
