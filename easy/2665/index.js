import {describe, it} from "node:test"
import assert from "node:assert"

const createCounter = (init) => {
  let count = init

  const increment = () => ++count

  const decrement = () => --count

  const reset = () => count = init 

  return {increment, decrement, reset}
}


describe("test", () => {
  it("test 1", () => {
    const init = 5
    const counter = createCounter(init)
    const testArr = []
    testArr.push(counter.increment())
    testArr.push(counter.reset())
    testArr.push(counter.decrement())

    assert.deepStrictEqual(testArr, [6, 5, 4])
  })
})