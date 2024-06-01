import {describe, it} from "node:test"
import assert from "node:assert"

const map = function(arr, fn) {
  const transform = []
  for(let i=0; i<arr.length; i++){
      transform.push(fn(arr[i], i))
  }
  return transform
};


describe("test", () => {
  it("case 1", () => {
    const arr = [1, 2, 3]
    const fn = (n) => n+1

    assert.deepStrictEqual(map(arr, fn), [2,3,4])
  })
  it("case 2", () => {
    const arr = [1, 2, 3]
    const fn = (n, i) => n+i

    assert.deepStrictEqual(map(arr, fn), [1, 3, 5])
  })
  it("case 3", () => {
    const arr = [10, 20, 30]
    const fn = () => 42 

    assert.deepStrictEqual(map(arr, fn), [42, 42, 42])
  })
})