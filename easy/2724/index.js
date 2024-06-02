import {describe, it} from "node:test"
import assert from "node:assert"

const sortBy = function(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b))
};

describe("test", () => {
  it('case 1', () => {
    const arr = [5, 4, 1, 2, 3]
    const fn = (x) => x

    assert.deepStrictEqual(sortBy(arr, fn), [1,2,3,4,5])
  })
})

