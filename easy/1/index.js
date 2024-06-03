import {describe, it} from "node:test"
import assert from "node:assert"

const twoSum = function(nums, target) {
  let output;
  for(let i=0; i < nums.length; i++){
    for(let j=i+1; j < nums.length; j++){
      const sum = nums[i]+nums[j]
      if(sum === target){
        output = [i, j]
      }
    }
  }
  return output
};

const twoSumOptimal = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in map) {
          return [map[complement], i];
      }
      map[nums[i]] = i;
  }
  return [];
}

describe("test", () => {
  it("case 1", () => {
    const nums = [3,2,3]
    const target = 6

    assert.deepStrictEqual(twoSumOptimal(nums, target), [0,2])
  })
  it("case 2", () => {
    const nums = [3,2,4]
    const target = 6

    assert.deepStrictEqual(twoSumOptimal(nums, target), [1,2])
  })
  it("case 3", () => {
    const nums = [3,3]
    const target = 6

    assert.deepStrictEqual(twoSumOptimal(nums, target), [0,1])
  })
})