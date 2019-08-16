// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */
var numIslands = function(grid) {
  let islandCount = 0;

  function logIsland(rowIdx, colIdx) {
    let right;
    let bot;
    let top;
    let left;
    rowIdx - 1 < 0 ? (top = "0") : (top = grid[rowIdx - 1][colIdx]);
    colIdx - 1 < 0 ? (left = "0") : (left = grid[rowIdx][colIdx - 1]);
    rowIdx + 1 > grid.length - 1
      ? (bot = "0")
      : (bot = grid[rowIdx + 1][colIdx]);
    colIdx + 1 > grid[rowIdx].length - 1
      ? (right = "0")
      : (right = grid[rowIdx][colIdx + 1]);
    grid[rowIdx][colIdx] = "checked";
    if (bot === "1") {
      logIsland(rowIdx + 1, colIdx);
    }
    if (right === "1") {
      logIsland(rowIdx, colIdx + 1);
    }
    if (top === "1") {
      logIsland(rowIdx - 1, colIdx);
    }
    if (left === "1") {
      logIsland(rowIdx, colIdx - 1);
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        islandCount++;
        logIsland(i, j);
      }
    }
  }
  return islandCount;
};
