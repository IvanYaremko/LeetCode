import {describe, it} from "node:test";
import assert from "node:assert/strict";

const compose = (functions) => {
  
  return (x) => {
    const len = functions.length
    let total = 0 

    if(len === 0) {
      return x
    }

    for(let i = len - 1; i >= 0; i--){
      if(i=== len - 1){
        total = functions[i](x)
      }else{
        total = functions[i](total)
      }
    }
    
    return total
  }
}

describe("test", () => {
  it("case 1", () => {
    const test = compose([x => x + 1, x => 2 * x])
    const value = test(4)

    assert.equal(value, 9)
  })

  it("case 2", () => {
    const test = compose([x => x + 1, x => x * x, x => 2 * x])
    const value = test(4)

    assert.equal(value, 65)
  })  

  it("case 3", () => {
    const test = compose([x => 10 * x, x => 10 * x, x => 10 * x])
    const value = test(1)

    assert.equal(value, 1000)
  })

  it("case 4", () => {
    const test = compose([])
    const value = test(42)

    assert.equal(value, 42)
  })


})