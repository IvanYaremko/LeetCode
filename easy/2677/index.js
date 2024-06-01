import {describe, it} from "node:test"
import assert from "node:assert"

const chunk = (arr, size) => {
  if(arr.length === 0) return []
  
  const output = []
  let temp = []
  for(let i = 0; i < arr.length; i++){
      if(temp.length < size){
        temp.push(arr[i])
      }else{
        output.push(temp)
        temp = [arr[i]]
      }
      if(i === arr.length-1){
        output.push(temp)
      }
  }
  return output
}


describe("test", () => {
  it("case 1", () => {
    const arr = [1,2,3,4,5]
    const size = 1
    assert.deepStrictEqual(chunk(arr, size), [[1],[2],[3],[4],[5]])
  })
  it("case 2", () => {
    const arr = [1,9,6,3,2]
    const size = 3
    assert.deepStrictEqual(chunk(arr, size), [[1,9,6],[3,2]])
  })
  it("case 3", () => {
    const arr = [8,5,3,2,6]
    const size = 6
    assert.deepStrictEqual(chunk(arr, size), [[8,5,3,2,6]])
  })
  it("case 4", () => {
    const arr = []
    const size = 1
    assert.deepStrictEqual(chunk(arr, size), [])
  })
})