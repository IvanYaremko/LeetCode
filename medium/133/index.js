
// Definition for a Node.
function Node(val, neighbors) {
 this.val = val === undefined ? 0 : val;
 this.neighbors = neighbors === undefined ? [] : neighbors;
};


/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if(node === null) return null

  const visited = new Map()
  function dfs(node){
    if(visited.get(node)) return visited.get(node)

      const clone = new Node(node.val)
      visited.set(node, clone)
      for(const neigh of node.neighbors){
        clone.neighbors.push(dfs(neigh))
      }
      return clone
  }

  return dfs(node)
};