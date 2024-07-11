const canFinish = function(numCourses, prerequisites) {
  const map = {}
  const visited = {}

  for(let i = 0; i < prerequisites.length; i++){
    if(map[prerequisites[i][0]] === undefined){
      map[prerequisites[i][0]] = [prerequisites[i][1]]
    }else{
      map[prerequisites[i][0]].push(prerequisites[i][1])
    }
  }

  const dfs =(node) => {
    if(visited[node]) return false
    if(map[node] !== undefined){
      if(map[node].length === 0){
        return true
      }
      visited[node] = true
      for(const n of map[node]){
        if(!dfs(n)) return false
      }
  
      visited[node] = false
      map[node] = []
    }
    return true
  }
  
  for(let key in map){
    if(!dfs(key)) return false
  }
  return true
}