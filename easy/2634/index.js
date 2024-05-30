import {describe, it} from "node:test";
import assert from "node:assert/strict";
import { testPerformance } from "../../util/performance.js";

const filter = (arr, fn) => {
  const output = []
  arr.forEach((ele, i) => {
    if(fn(ele, i)){
      output.push(ele)
    }
  });
  return output
}


describe("test", () => {
  it("case 1 - greaterThan10", () => {
    const arr = [0, 10, 20, 30]
    const fn = (n) => n > 10

    testPerformance(filter, arr,fn)
    assert.deepStrictEqual(filter(arr, fn), [20, 30])
  })

  it("case 2 - firstIndex", () => {
    const arr = [1,2,3]
    const fn = (n, i) => i === 0
    assert.deepStrictEqual(filter(arr, fn), [1])
  })

  it("case 3 - plusOne", () => {
    const arr = [-2,-1,0,1,2]
    const fn = (n) => n + 1
    assert.deepStrictEqual(filter(arr, fn), [-2,0,1,2])
  })
})


