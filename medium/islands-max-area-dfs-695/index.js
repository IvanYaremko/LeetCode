var maxAreaOfIsland = function(grid) {
  let ans = 0
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      if(grid[i][j]){
        ans = Math.max(ans, dfs(i, j))
      }
    }
  }

  function dfs(i, j){
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || !grid[i][j]) return 0
    grid[i][j] = 0
    return 1 + dfs(i+1, j) + dfs(i-1, j) + dfs(i, j+1) + dfs(i, j-1)
  }

  return ans
};
