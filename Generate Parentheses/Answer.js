var generateParenthesis = function(n) {
  const leftArr = [],
    rightArr = [],
    result = [];

  for (let count = 0; count < n; count++) {
    leftArr.push("(");
    rightArr.push(")");
  }

  function generate(left, right, arr) {
    //Boundary
    if (left <= 0) {
      if (right > 0) {
        for (let i = 0; i < right; i++) {
          arr += ")";
        }
      }
      result.push(arr);
      return;
    }

    generate(left - 1, right + 1, arr + "(");
    if (right > 0) {
      generate(left, right - 1, arr + ")");
    }
  }

  generate(n - 1, 1, "(");
  return result;
};

// Another Way
var generateParenthesis = function(n) {
  var arr = [];
  compose(
    n,
    n,
    ""
  );
  return arr;

  function compose(left, right, str) {
    if (!left && !right && str.length) return arr.push(str);
    if (left)
      compose(
        left - 1,
        right,
        str + "("
      );
    if (right > left)
      compose(
        left,
        right - 1,
        str + ")"
      );
  }
};