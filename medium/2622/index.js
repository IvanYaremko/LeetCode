var TimeLimitedCache = function() {
     this.map = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now()
    if(this.map.has(key)){
      this.map.set(key, [value, now+duration])
      return true
    }
    this.map.set(key, [value, now+duration])
    return false
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.map.has(key)){
      const [value, expiry] = this.map.get(key)
      const now = Date.now()
      if(now < expiry){
        return value
      }else{
        this.map.delete(key)
      } 
  }
    return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0
    this.map.forEach((value, key) => {
      const [_, expiry] = value
      const now = Date.now()
      if(now < expiry){
        count++
      }else{
        this.map.delete(key)
      }
    })
    return count
};


const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1
