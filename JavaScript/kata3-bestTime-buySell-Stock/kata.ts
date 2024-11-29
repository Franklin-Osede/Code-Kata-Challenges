/**
 * Calculates the maximum profit from a given array of stock prices.
 * @param {number[]} prices - Array of stock prices where prices[i] is the price on day i.
 * @return {number} The maximum profit achievable.
 */
function maxProfit(prices: number[]): number {
  let minPrice: number = Infinity; 
  let maxProfit: number = 0;       

  for (const price of prices) {
      if (price < minPrice) {
          minPrice = price;
      }

      const profit: number = price - minPrice;

      if (profit > maxProfit) {
          maxProfit = profit;
      }
  }

  return maxProfit;
}

export default maxProfit; 
