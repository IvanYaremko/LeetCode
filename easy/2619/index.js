import {describe, it} from "node:test";
import assert from "node:assert/strict";

Array.prototype.last = function() {
  if(this.length === 0){
    return -1
  }
  return this[this.length-1]
}


describe("2619", () => {
  it("should return 3", () => {
    const arr = [1, 2, 3]
    assert.equal(arr.last(), 3)
  })

  it("should return -1", () => {
    const arr = []
    assert.equal(arr.last(), -1)
  })
})