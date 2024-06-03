function memoize(fn) {
  const map = new Map()
  return function(...args){
    const key = args.toString()
    if(map.has(key)){
      return map.get(key)
    }else{
      const result = fn(...args)
      map.set(key, result)
      return result
    }
  }
}
