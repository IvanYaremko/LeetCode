var pacificAtlantic = function(matrix) {
    if (matrix.length === 0) return [] 
 let ROWS = matrix.length
 let COLS = matrix[0].length
 
 let atlantic = []
 let pacific = []
 for (let i = 0;i<ROWS;i++){
     atlantic.push(new Array(COLS).fill(false))
     pacific.push(new Array(COLS).fill(false))
 }
 
 for (let col=0; col<COLS;col++){
     dfs(matrix, 0, col, Number.MIN_SAFE_INTEGER, pacific)
     dfs(matrix, ROWS - 1, col, Number.MIN_SAFE_INTEGER, atlantic)
 }
  
  for (let row = 0; row<matrix.length; row++){
      dfs(matrix, row, 0, Number.MIN_SAFE_INTEGER, pacific)
      dfs(matrix, row, COLS - 1, Number.MIN_SAFE_INTEGER, atlantic)
  }
  
  let res = []
  for (let i=0;i<ROWS;i++){
      for (let j=0;j<COLS;j++){
          if (atlantic[i][j] && pacific[i][j]){
              res.push([i, j])
          }
      }
  }
  return res
}

const dfs = (matrix, i, j, prev, ocean) =>{
//checkOutOfBounds
  if (i<0 ||
     i > matrix.length -1 ||
     j < 0 ||
     j > matrix[i].length - 1
    ) return
  
  
  if (matrix[i][j] < prev) return
  if (ocean[i][j]) return
  ocean[i][j] = true
  
  dfs(matrix, i+1, j, matrix[i][j], ocean)
  dfs(matrix, i-1, j, matrix[i][j], ocean)
  dfs(matrix, i, j+1, matrix[i][j], ocean)
  dfs(matrix, i, j-1, matrix[i][j], ocean)    
}

