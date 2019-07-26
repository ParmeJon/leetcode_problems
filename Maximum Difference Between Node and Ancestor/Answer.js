const maxAncestorDiff = function(root) {
  let res = 0;
  let diff;
  const traversal = function(node, min, max) {
    if (node === null) {
      return;
    }

    if (min > node.val) {
      min = node.val;
    }
    if (max < node.val) {
      max = node.val;
    }

    diff = max - min;
    if (diff > res) {
      res = diff;
    }

    traversal(node.left, min, max);
    traversal(node.right, min, max);
  };

  traversal(root, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);

  return res;
};


