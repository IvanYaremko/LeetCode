var solve = function(board) {
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[0].length; j++){
      if(board[i][j] === 'O' && (
        i === 0 || i === board.length-1 ||
        j === 0 || j === board[0].length-1
      )){
        dfs(i, j)
      }
    }
  }

  function dfs(i, j){
    if(i < 0 || i >= board.length || 
      j < 0 || j >= board[0].length || 
      board[i][j] === 'M' || board[i][j] === 'X') return

    board[i][j] = 'M'
    dfs(i+1, j)
    dfs(i-1, j)
    dfs(i, j+1)
    dfs(i, j-1)
    return
  }

  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[0].length; j++){
      if(board[i][j] === 'M'){
        board[i][j] = 'O'
      }else {
        board[i][j] = 'X'
      }
    }
  }
};