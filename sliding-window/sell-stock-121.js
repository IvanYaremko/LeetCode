var maxProfit = function(prices) {
  let buy = prices[0];
  let profit = 0
  for(let end = 1; end < prices.length; end++){
      if(prices[end] < buy){
          buy = prices[end]
      }else if(prices[end] - buy > profit){
          profit = prices[end] - buy
      }
  }
  return profit
};