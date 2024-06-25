import { Queue } from "../Queue"

class Graph{
  constructor(){
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
    const queue = new Queue()

    visited[startingNode] = true
    queue.enqueue(startingNode)
    while(!queue.isEmpty){
      const queueEle = queue.dequeue()

      const neigbours = this.adjList.get(queueEle)
      for(const neigh of neigbours){
        if(!visited[neigh]){
          visited[neigh] = true
          queue.enqueue(neigh)
        }
      }
    }
  }

  dfs(startingNode){
    const visited = {}
    this.dfsUtil(startingNode, this.dfsUtil)
  }
  dfsUtil(node, visited){
    visited[node] = true
    const neighbors = this.adjList.get(node)
    for(const neigh in neighbors){
      if(!visited[neigh]){
        visited[neigh] = true
        this.dfsUtil(neigh, visited)
      }
    }
  }
}