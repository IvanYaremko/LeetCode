import {describe, it} from "node:test"
import assert from "node:assert"

const flat = function (arr, n) {
  const res = []

  function dfs(arr, level) {
      for (const val of arr) {
          if (typeof val === 'object' && level < n) {
              dfs(val, level + 1)
          } 
          else {
              res.push(val)
          }
      }
      return res;
  }

  return dfs(arr, 0)
};

describe("test", () => {
  it("case 1", () => {
    const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
    const n = 1
    const actual = flat(arr, n)
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
    assert.deepStrictEqual(actual, expected)
  })
})