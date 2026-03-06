export function getSteps(prices) {
  let profit = 0;
  const steps = [];

  for (let i = 1; i < prices.length; i++) {
    steps.push({
      action: "check-price",
      prices: prices,
      index: i,
      profit: profit,
      text: `Checking if price at index [${i}] > price at index [${i - 1}] | (${prices[i]} > ${prices[i - 1]}) .`,
    });
    if (prices[i] > prices[i - 1]) {
      const previousProfit = profit;
      profit += prices[i] - prices[i - 1];
      steps.push({
        action: "update-profit",
        prices: prices,
        index: i,
        profit: profit,
        text: `Price at index [${i}] > price at index ${i} | (${prices[i]} > ${prices[i - 1]}). 
        Updating profit to (${prices[i]} - ${prices[i - 1]}) + previous profit [${previousProfit}] = [${profit}].`,
      });
    }
  }
  steps.push({
    action: "return-profit",
    prices: prices,
    profit: profit,
    text: `Returning profit of [${profit}].`,
  });

  return steps;
}
