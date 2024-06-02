const isEmpty = function(obj) {
  for(const key in obj){
      return false
  }
  return true
};