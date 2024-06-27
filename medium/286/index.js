const LAND = 2147483647
const WATER = -1
const TREASURE = 0

var wallsAndGates = function(grid){
  const q = []
  for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[0].length; j++){
          if(grid[i][j] === TREASURE){
              q.push([i, j])
          }
      }
  }

  
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  while(q.length > 0){
      const [I, J] = q.shift()
      for(const [dirI, dirJ] of dirs){
          const newI = I + dirI
          const newJ = J + dirJ

          if(newI < 0 || newI >= grid.length || 
            newJ < 0 || newJ >= grid[0].length || 
            grid[newI][newJ] !== LAND){
              continue
          }
          grid[newI][newJ] = grid[I][J] + 1
          q.push([newI, newJ])
      }
  }
}