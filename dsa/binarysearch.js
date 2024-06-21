const iterative = function(arr, x){
  let start = 0, end = arr.length-1
  while(start <= end) {
    let mid = Math.floor((start + end) / 2)

    if(arr[mid] === x) return true
    else if(arr[mid] < x){
      start =  mid + 1
    }else{
      end = mid - 1
    }
  }
}

const recursive = function(arr, x, start, end) {
  if(start > end) return false
  let mid = Math.floor((start+end) / 2)
  if(arr[mid] === x) return true
  
  if(arr[mid] > x){
    return recursive(arr, x, start, mid-1)
  }else{
    return recursive(arr, x, mid+1, end)
  }
}