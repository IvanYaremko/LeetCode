import {describe, it} from "node:test"
import assert from "node:assert"

const scoreOfString = (s) => {
  let total = 0
  for(let i=0; i<s.length-1; i++){
    total += Math.abs((s.charCodeAt(i) - s.charCodeAt(i+1)))
  }
  return total
}

describe("test", () => {
  it("case 1", () => {
    assert.strictEqual(scoreOfString("hello"), 13)
  })
})