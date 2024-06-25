import { Queue } from "../Queue"

class Graph{
  constructor(num){
    this.numOfVertices = num
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
      const queueEle = q.dequeue()
      const neighbours = this.adjList.get(queueEle)

      for(const neighbour of neighbours){
        if(!visited[neighbour]){
          visited[neighbour] = true
          q.enqueue(neighbour)
        }
      }
    }
  }
  dfs(startingNode){
    const visited = {}
    this.DFSUtil(startingNode, visited)
  }
  DFSUtil(vertex, visited){
    visited[vertex] = true
    const neighbours = this.adjList.get(vertex)

    for(const neigh of neighbours){
      if(!visited[neigh]){
        this.DFSUtil(neigh, visited)
      }
    }
  }
}