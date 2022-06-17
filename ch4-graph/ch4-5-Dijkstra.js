const graph = {
  'A': {'B': 2, 'C': 5},
  'B': {'A': 2, 'C': 6, 'D': 1, 'E': 3},
  'C': {'A': 5, 'B': 6, 'F': 8},
  'D': {'B': 1, 'E': 4},
  'E': {'B': 3, 'D': 4, 'G': 9},
  'F': {'C': 8, 'G': 7},
  'G': {'E': 9, 'F': 7}
}
const graph2 = {
  'A': {'B': 2, 'C': 4},
  'B': {'A': 1, 'G': 1},
  'C': {'B': -3, 'G': 1},
  'G': {}
}
let visited = {}
let distance = {}

// 방문하지 않은 노드이면서 시작노드와 최단거리인 노드 반환
const get_smallest_node = () => {
  let min_value = Infinity
  let index = null

  for (node in graph) {
    if (!visited[node] && distance[node] < min_value) {
      min_value = distance[node]
      index = node
    }
  }
  return index
}

const Dijkstra = (graph, startNode) => {
  
  for (node in graph) {
    visited[node] = false 
    distance[node] = Infinity
  }
  const graphSize = Object.keys(graph).length
  // 시작노드 -> 시작 노드 거리 계산 및 방문 처리
  distance[startNode] = 0
  visited[startNode] = true
  // 시작노드의 인접한 노드들에 대해 최단거리 계산
  for (const node in graph[startNode]) {
    distance[node] = graph[startNode][node]
  }
  // 시작노드 제외한 n-1개의 다른 노드들 처리
  for (let i = 0; i < graphSize - 1; i++) {
    let now = get_smallest_node()         // 방문X 면서 시작노드와 최단거리인 노드 반환
    visited[now] = true                   // 해당 노드 방문 처리
    // 해당 노드와 인접한 노드들 간의 거리 계산
    for (next in graph[now]) {
      let cost = distance[now] + graph[now][next]   // 시작 -> now 거리 + now -> now의 인접노드 거리
      if (cost < distance[next]) {                  // cost < 시작 -> now의 인접노드 다이렉트 거리
        distance[next] = cost
      }
    }
  }
  console.log(distance)
}

Dijkstra(graph, 'A')