const findOrder = function(numCourses, prerequisites) {
  const order = [];
  const queue = [];
  const graph = new Map();
  const indegree = Array(numCourses).fill(0);

  for (const [course, preq] of prerequisites) {
    // build graph map
    if (graph.has(preq)) {
      graph.get(preq).push(course);
    } else {
      graph.set(preq, [course]);
    }
    // build indegree array
    indegree[course]++;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const preq = queue.shift();
    if (graph.has(preq)) {
      for (const course of graph.get(preq)) {
        indegree[course]--;
        if (indegree[course] === 0) queue.push(course);
      }
    }
    order.push(preq);
  }

  return numCourses === order.length ? order : [];
};