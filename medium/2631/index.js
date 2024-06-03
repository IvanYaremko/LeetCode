import {describe, it} from "node:test"
import assert from "node:assert"

Array.prototype.groupBy = function(fn){
  const output = {}
  this.forEach(ele => {
    const key = fn(ele)
    if(!output[key]){
      output[key] = [ele]
    }else{
      output[key].push(ele)
    }
  })
  return output
}

describe("test", () => {
  it('case 1', () => {
    const arr = [
      {"id":"1"},
      {"id":"1"},
      {"id":"2"}
    ]
    const fn = function(item){
      return item.id
    }

    const expected = { 
      "1": [{"id": "1"}, {"id": "1"}],   
      "2": [{"id": "2"}] 
    } 

    assert.deepStrictEqual(arr.groubBy(fn), expected)
  })

  it('case 2', () => {
    const arr = [
      [1, 2, 3],
      [1, 3, 5],
      [1, 5, 9]
    ]
    const fn = function(list) { 
      return String(list[0]); 
    }

    const expected = { 
      "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]] 
    }
    assert.deepStrictEqual(arr.groubBy(fn), expected)
  })

  it('case 3', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const fn = function (n) { 
      return String(n > 5);
    }
    const expected = {
      "true": [6, 7, 8, 9, 10],
      "false": [1, 2, 3, 4, 5]
    }
    assert.deepStrictEqual(arr.groubBy(fn), expected)
  })
})