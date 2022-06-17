const graph = {
  A: ['B', 'C', 'D'],
  B: ['A', 'E', 'F'],
  C: ['A', 'H'],
  D: ['A', 'I', 'J'],
  E: ['B', 'K'],
  F: ['B'],
  H: ['C', 'G'],
  I: ['D'],
  J: ['D', 'L'],
  K: ['E'],
  G: ['H'],
  L: ['J'],
}

// (graph, 시작 정점)
const dfs = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode);

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop(); // stack이기 때문에 pop을 사용한다.
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
};

console.log('결과:', dfs(graph, "A"));
// 결과: ['A', 'D', 'J', 'L', 'I', 'C', 'H', 'G', 'B', 'F', 'E', 'K', ]