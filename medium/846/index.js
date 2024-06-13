import {describe, it} from "node:test"
import assert from "node:assert/strict"


const isNStraightHand = function(hand, groupSize) {
  const cardMap = {}

  hand.forEach(card => {
    cardMap[card] = (cardMap[card] || 0) + 1
  });

  const sortedHand = hand.sort()
  for(const card of sortedHand){
    if(cardMap[card] > 0){
      for(let nextCard = card; nextCard < card + groupSize; ++nextCard){
        if(!cardMap[nextCard]){
          return false
        }
        --cardMap[nextCard]
      }
    }
  }

  return true
};




describe('test', () => { 
  it("case 1", () => {
    const hand = [1,2,3,6,2,3,4,7,8]
    const groupSize = 3

    assert.equal(isNStraightHand(hand, groupSize), true)
  })
 })