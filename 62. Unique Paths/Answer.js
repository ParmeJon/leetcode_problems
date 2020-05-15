/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let mainHead = head;
  let nHead = head;
  let i = 0;
  while (i < n && nHead) {
    nHead = nHead.next;
    i++;
  }
  if (nHead) {
    while (nHead.next) {
      mainHead = mainHead.next;
      nHead = nHead.next;
    }
    mainHead.next = mainHead.next.next;
  } else {
    head = mainHead.next;
  }
  return head;
};
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(row, col) {
let trackMatrix = []
    for (let i = 0; i < row; i++) {
        let insideArr = []
        for (let j = 0; j < col; j++) {
            insideArr.push(-1)
        }
        trackMatrix.push(insideArr)
    }
    trackMatrix[0][0] = 1
    let currRow = 0
    let currCol = 0
    let diagonalColPos = 0
    while (trackMatrix[row-1][col-1] === -1) {
        if (currRow+1>row-1 || currCol-1 < 0) {
            currRow = 0
            currCol = diagonalColPos + 1
            diagonalColPos++
        } else {
            currRow++
            currCol--
        }
        let topVal = currRow-1 < 0 ? 0 : trackMatrix[currRow-1][currCol]
        let leftVal = currCol-1 < 0 ? 0 : trackMatrix[currRow][currCol-1]
        trackMatrix[currRow][currCol] = topVal + leftVal
    }
    return trackMatrix[row-1][col-1]
};