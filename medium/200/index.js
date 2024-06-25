const LAND = '1';
const WATER = '0';
const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
function numIslands(grid) {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === LAND) {
        islands++;
        bfs(grid, i, j);
      }
    }
  }
  return islands;
}

function bfs(grid, i, j) {
  const q = [[i, j]];
  grid[i][j] = WATER;

  while (q.length > 0) {
    const [I, J] = q.shift();
    for (const [dirX, dirY] of dirs) {
        const newI = I + dirX;
        const newJ = J + dirY;      
        if (0 <= newI && newI < grid.length && 
          0 <= newJ && newJ < grid[0].length && 
          grid[newI][newJ] === LAND) {
            grid[newI][newJ] = WATER;
            q.push([newI, newJ]);
        }
    }
  }
}