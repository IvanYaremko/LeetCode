import {describe, it} from "node:test"
import assert from "node:assert"

const expect = (val) => {
  const toBe = (compare) => {
    return val === compare ? {"value": true} : {"error": "Not Equal"}
  }
  const notToBe = (compare) => {
    return val !== compare ? {"value": true} : {"error": "Not Equal"}
  }

  return {toBe, notToBe}
}

describe("test", () => {
  it("case 1", () => {
    const value = expect(5).toBe(5)
    assert.deepStrictEqual(value, { value: true })
  })

  it("case 2", () => {
    const value = expect(5).toBe(null)
    assert.deepStrictEqual(value, {"error": "Not Equal"})
  })

  it("case 3", () => {
    const value = expect(5).notToBe(null)
    assert.deepStrictEqual(value, { value: true })
  })
})