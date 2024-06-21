function swap(arr, xp, yp){
  var temp = arr[xp]
  arr[xp] = arr[yp]
  arr[yp] = temp
}

function selectionSort(arr, n){
  let i, j, minIndex

  // one by one move boundary of unsorted array
  for(i = 0; i<n-1; i++){ 
    // find the mimimum element in unsorted array
    minIndex = i
    for(j=i+1; j<n; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    // swap the found minimum element with the first element
    swap(arr, minIndex, i)
  }
}