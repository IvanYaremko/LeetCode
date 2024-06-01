const ArrayWrapper = function(nums) {
  this.wrapArray = nums
}

ArrayWrapper.prototype.valueOf = function() {
  return this.wrapArray.reduce((accu, cv) => accu+cv, 0)
}

ArrayWrapper.prototype.toString = function () {
  return `[${this.wrapArray.join(",")}]`;
};

