graph = {
  'A': {'B': 9, 'C': 2},
  'B': {'C': 6, 'D': 3, 'E': 1},
  'C': {'B': 6, 'D': 2, 'F': 9},
  'D': {'B': 3, 'C': 2, 'E': 5, 'F': 6},
  'E': {'B': 1, 'D': 5, 'F': 7, 'G': 7},
  'F': {'C': 9, 'D': 6, 'E': 3, 'G': 4},
  'G': {'E': 7, 'F': 4}
}

const Bellman_Ford = (graph, startNode) => {
  graphSize = Object.keys(graph).length
  let distance = {}
  let predecessor = {}
  
  // 전체 노드 무한대로 설정
  for (node in graph) {
    distance[node] = Infinity
    predecessor[node] = null
  }
  // 시작노드 0
  distance[startNode] = 0
  
  // 정점 개수(V-1) 만큼 반복
  for (let i = 0; i <= graphSize - 1; i++) {
    for (node in graph) {
      for (neighbor in graph[node]) {
        //  현재 정점을 거쳐 가는 거리가 더 적을 경우
        if (distance[neighbor] > distance[node] + graph[node][neighbor]) {
          distance[neighbor] = distance[node] + graph[node][neighbor]
          // 거쳐온 노드 저장
          predecessor[neighbor] = node
        }
      }
    }
  }
  return [distance, predecessor]
}

value = Bellman_Ford(graph, 'A')
console.log('간선 가중치 합 : ', value[0])
console.log('연결된 간선:', value[1])
// console.log()
