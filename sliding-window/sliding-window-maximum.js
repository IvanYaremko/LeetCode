const maxSlidingWindow = function(nums, k) {
  const output = []
  const q = [] //store index
  let left = 0

  for(let right = 0; right < nums.length; right++){
    while(q.length > 0 && nums[q[q.length-1]] < nums[right]){
      q.pop()
    }
    q.push(right)

    if(left > q[0]) q.shift()

    if(right + 1 >= k){
      output[left] = nums[q[0]]
      left++
    }
  }

  return output
};