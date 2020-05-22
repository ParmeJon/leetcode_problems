/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = [];
  let cleared = 0;
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  const dependencies = Array(numCourses).fill(0);
  for (const [course, preReq] of prerequisites) {
    graph[preReq].push(course);
    dependencies[course]++;
  }
  const queue = [];
  //     push nodes with no dependency to queue
  dependencies.forEach((rank, idx) => {
    if (rank === 0) {
      queue.push(idx);
    }
  });
  //     BFS kahn
  while (queue.length > 0) {
    let front = queue.shift();
    cleared++;
    //     drop nodes by 1
    graph[front].forEach((node) => {
      dependencies[node]--;
      if (ranks[node] === 0) {
        queue.push(node);
      }
    });
    //       push nodes with no dependency to queue
  }
  return cleared === numCourses;
};
