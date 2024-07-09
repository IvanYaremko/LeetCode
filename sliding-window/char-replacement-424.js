const characterReplacement = function(s, k) {
  let sum = 0
  let start = 0
  const map = new Map()

  for(let end = 0; end < s.length; end++){
      let window = end - start + 1
      map.set(s[end], (map.get(s[end]) || 0) + 1)

      if(window - (Math.max(...map.values()))  > k){
         map.set(s[start], (map.get(s[start]) || 0) - 1)
          start++
      }
      window = end - start + 1
      sum = Math.max(sum, window)
  }

  return sum
};