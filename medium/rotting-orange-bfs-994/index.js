const orangesRotting = function(grid){
  const q = []
  let oranges = 0
  let time = 0

  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(grid[i][j] === 1){
        oranges++
      }
      if(grid[i][j] === 2){
        q.push([i, j, 0])
      }
    }
  }
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  while(q.length > 0 && oranges){
    const [I, J, mins] = q.shift()

    if(grid[I][J] === 1){
      grid[I][J] = 2
      oranges--
      time = mins
    }

   
    for(const [dirI, dirJ] of dirs){
      const [newI, newJ] = [dirI+I, dirJ+J]

      if(newI<0 || newI>=grid.length || newJ<0 || newJ>=grid[0].length){
        continue
      }
      if(grid[newI][newJ] === 1){
        q.push([newI, newJ, mins+1])
      }
      
    }
  }

  return oranges ? -1 : time
}