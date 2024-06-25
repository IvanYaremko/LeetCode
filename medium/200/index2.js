import { Queue } from "../../dsa/Queue"

class Graph {
  constructor(vertices){
    this.total = vertices
    this.adjList = new Map()
  }

  addVertex(v){
    this.adjList.set(v, [])
  }

  addEdge(v, w){
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  bfs(startingNode){
    const visited = {} 
    const q = new Queue()

    visited[startingNode] = true
    q.enqueue(startingNode)
    while(!q.isEmpty()){
      const queuedEle = q.dequeue()

      const neighbours = this.adjList.get(queuedEle)

      for(const neigh of neighbours){
        if(!visited[neigh]){
          visited[neigh] = true
          q.enqueue(neigh)
        }
      }
    }
  }

  dfs(startingNode) {
    const visited = {}
    this.DFSUtl(startingNode, visited)
  }
  DFSUtl(vertex, visited) {
    visited[vertex] = true
    const neighbours = this.adjList.get(vertex)
    for(const neigh of neighbours){
      if(!visited[neigh]){
        this.DFSUtl(neigh, visited)
      }
    }
  }
}