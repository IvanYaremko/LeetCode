const quickSort = (arr) => {
  if(arr.length <= 1){
    return arr
  }
 
  let pivot = arr[Math.floor(arr/2)]
  let leftArr = []
  let rightArr = []
  
  for (let i=0; i < arr.length; i++){
    if(arr[i] < pivot){
      leftArr.push(arr[i])
    }else{
      rightArr.push(arr[i])
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

