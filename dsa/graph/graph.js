const graph = function() {
  const adjList = new Map()
 
  const addVertex = (v) => {
    adjList.set(v, [])
  }

  const addEdge = (v, w) => {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    adjList.get(v).push(w)
    // Since graph is undirected,
    // add an edge from w to v also
    adjList.get(w).push(v)
  }

  const printGraph = () => {
    let keys = adjList.keys()
    for(let key of keys){
      const values = adjList.get(key)
      let conc = ""

      for(let value of values){
        conc += value + " "
      }

      console.log(key + " -> " + conc)
    }
  }

  return {
    addVertex,
    addEdge,
    printGraph
  }
}

class Graph {
  // defining vertex array and
  // adjacent list
  constructor(noOfVertices)
  {
      this.noOfVertices = noOfVertices;
      this.AdjList = new Map();
  }

  // add vertex to the graph
  addVertex(v)
  {
      // initialize the adjacent list with a
      // null array
      this.AdjList.set(v, []);
  }
  // add edge to the graph
  addEdge(v, w)
  {
      // get the list for vertex v and put the
      // vertex w denoting edge between v and w
      this.AdjList.get(v).push(w);

      // Since graph is undirected,
      // add an edge from w to v also
      this.AdjList.get(w).push(v);
  }
  // Prints the vertex and adjacency list
  printGraph()
  {
      // get all the vertices
      var get_keys = this.AdjList.keys();

      // iterate over the vertices
      for (var i of get_keys) 
  {
          // get the corresponding adjacency list
          // for the vertex
          var get_values = this.AdjList.get(i);
          var conc = "";

          // iterate over the adjacency list
          // concatenate the values into a string
          for (var j of get_values)
              conc += j + " ";

          // print the vertex and its adjacency list
          console.log(i + " -> " + conc);
      }
  }

  // bfs(v)
  // dfs(v)
}

const myG = graph()
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for(let i = 0; i < vertices.length; i++){
  myG.addVertex(vertices[i])
}

var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
myG.addEdge('A', 'B');
myG.addEdge('A', 'D');
myG.addEdge('A', 'E');
myG.addEdge('B', 'C');
myG.addEdge('D', 'E');
myG.addEdge('E', 'F');
myG.addEdge('E', 'C');
myG.addEdge('C', 'F');
myG.printGraph()