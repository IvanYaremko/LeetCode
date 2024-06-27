const LAND = '1'
const WATER = '0'
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

function numIslands(grid) {
    let islands = 0
    for(let i = 0; i < grid.length; i++){
         for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === LAND){
                islands++
                bfs(i, j)
            }
         }
    }

    function bfs(i, j){
        const q = [[i, j]]
        grid[i][j] = WATER

        while(q.length){
            const [I, J] = q.shift()

            for(const [dirI, dirJ] of dirs){
                const [newI, newJ] = [dirI+I, dirJ+J]

                if(newI >= 0 && newI < grid.length && newJ >= 0 && newJ < grid[0].length && grid[newI][newJ] === LAND){
                    grid[newI][newJ] = WATER
                    q.push([newI, newJ])
                }
            }
        }
    }

    return islands
}



