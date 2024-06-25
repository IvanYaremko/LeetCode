var maxAreaOfIsland = function(grid) {
  let max = 0
  for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++){
          if(grid[i][j]){
              max = Math.max(max, dfs(i, j))
          }
      }
  }
  return max

  function dfs(i, j){
      if(0 > i || 0 > j || i >= grid.length || j >= grid[0].length || !grid[i][j]) return 0
      grid[i][j] = 0
      return 1 + dfs(i+1, j) + dfs(i-1, j) + dfs(i, j+1) + dfs(i, j-1)
  }
};
