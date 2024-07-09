var isBalanced = function(root) {
    if(root === null) return true
    if(height(root) === -1) return false
    return true

    function height(root){
      if(root === null) return root
      const left = height(root.left)
      const right = height(root.right)
      if(left === -1 || right === -1) return -1
      if(Math.abs(left-right) > 1) return -1
      return 1 + Math.max(left, right)
    }
};