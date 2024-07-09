const lengthOfLongestSubstring = function(s) {
  let start = 0
  let size = 0
  let set = new Set()
  for(let end = 0; end < s.length; end++){
      if(set.has(s[end])){
          while(set.has(s[end])){
              set.delete(s[start])
              start++
          }
      }
      set.add(s[end])
      size = Math.max(size, end - start + 1)
  }
  return size
};