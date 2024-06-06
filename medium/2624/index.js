import {describe, it} from "node:test"
import assert from "node:assert"

Array.prototype.snail = function(rowsCount, colsCount) {
   if(rowsCount*colsCount !== this.length) return []

   const snail = Array.from({length: rowsCount}, () => Array(colsCount))
  
   for (let h = 0, i = 0, j = 0, k = 1; h < this.length; ++h) {
    snail[i][j] = this[h];
    i += k;
    if (i === rowsCount || i === -1) {
        i -= k;
        k = -k;
        ++j;
    }
} 
  return snail;
}


describe("test", () => {
  it("case 1", () => {
    const nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
    const rows = 5
    const cols = 4
    const expected = [
      [19,17,16,15],
      [10,1,14,4],
      [3,2,12,20],
      [7,5,18,11],
      [9,8,6,13]
     ]

    assert.deepStrictEqual(nums.snail(rows, cols), expected)
  })
})