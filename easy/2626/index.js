const reduce = (nums, fn, init) => {
  if(nums.length === 0){
      return init
  }

  let res = init 
  nums.forEach(ele => {
      res = fn(res, ele)
  })
  return res
};