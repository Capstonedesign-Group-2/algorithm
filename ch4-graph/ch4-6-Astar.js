const map = [
  // 0: 빈 공간(노드), 1: 벽
  [0,0,0,1,1,1,1],
  [0,1,0,1,1,1,1],
  [0,1,0,0,0,0,0],
  [0,1,0,1,1,1,0],
  [0,1,0,1,0,0,0],
  [0,1,0,1,0,1,1],
  [0,0,0,0,0,0,0],
];

class nodeInfo {
  constructor(nodeDist, parentNode) {  
    this.nodeDist = nodeDist;
    this.F = 0;
    this.G = 0;
    this.H = 0;
    this.parentNode = parentNode;
  }
}

// 근접 노드 찾기
const closeNode_search = (current, i) => {
  switch(i) {
    case 0: 
      if(current[1] < map[0].length - 1 && map[current[0]][current[1] + 1] !== 1) {
        let x = current[1] + 1
        let y = current[0]
        return [y, x];
      } else return 0
    case 1:
      // x - 1
      if(current[1] > 0 && map[current[0]][current[1] - 1] !== 1) {
        let x = current[1] - 1
        let y = current[0]
        return [y, x];
      } else return 0
    case 2:
      // y + 1
      if(current[0] < map.length - 1 && map[current[0] + 1][current[1]] !== 1) {
        let x = current[1]
        let y = current[0] + 1
        return [y, x];
      } else return 0
    case 3:
      // y - 1
      if(current[0] > 0 && map[current[0] - 1][current[1]] !== 1) {
        let x = current[1]
        let y = current[0] - 1
        return [y, x];
      } else return 0
  }
}

// F값이 가장 작은 노드 탐색
const get_smallest_node = () => {
  let min_value = Infinity
  let dist = null
  for (let i = 0; i < O.length; i++) {
    if (min_value > O[i].F) {
      min_value = O[i].F
      dist = O[i]
    }
  }
  return dist 
}

let O = [] // 저장소 O (OpenList) 최단경로 분석을 위한 상태값 갱신
let C = [] // 저장소 C (CloseList) 처리 완료된 노드 담는 목적

const A_Star = (map, start, dest) => {
  let startNode = new nodeInfo(start, null);
  let count = 0
  let current = startNode;
  C.push(startNode)
  // 근접 노드 OpenList 추가
  while(true) {
    for (let i = 0; i < 4; i++) { 
      let closeNode = closeNode_search(current.nodeDist, i)
      if (closeNode) {
        let pushNode = new nodeInfo(closeNode, current.nodeDist)
        pushNode.G = current.G + 1
        pushNode.H = Math.round(Math.sqrt((dest[0] - closeNode[0]) ** 2 + (dest[1] - closeNode[1]) ** 2))
        pushNode.F = pushNode.G + pushNode.H

        if(!C.some(x => { return x.nodeDist[0] == pushNode.nodeDist[0] && x.nodeDist[1] == pushNode.nodeDist[1]})) {
          O.push(pushNode)
        }
      }
    }
    // 근접 검색 노드 변경
    current = get_smallest_node();
    
    C.push(current)
    O = O.filter(val => val !== current);
    if(current.nodeDist[0] === dest[0] && current.nodeDist[1] === dest[1])
    break;
  }
  return {O, C}
}

let start = [2, 2]
let dest = [6, 6]

A_Star(map, start, dest)
console.log('O: ', O)
console.log('C: ', C)
