const countSubarrays = function(nums, k) {
  let left = 0
  let sums = 0
  let count = 0

  for(let right = 0; right < nums.length; right++){
     sums += nums[right] 
     while(sums*(right - left + 1) >= k){
      sums -= nums[left++]
     }
     count += right - left + 1
  }
  return count
};