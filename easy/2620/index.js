import {describe, it} from "node:test";
import assert from "node:assert/strict";

const counter = (n) => {
  let init = n

  return () => init++
}

describe("2620", () => {
  it("should equal 13", () => {
    const myCount = counter(10)
    myCount()
    myCount()
    
    assert.equal(myCount(), 12)
  })
})