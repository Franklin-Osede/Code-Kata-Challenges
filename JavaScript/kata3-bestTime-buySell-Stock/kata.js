/**
 * Calculates the maximum profit from a given array of stock prices.
 * @param {number[]} prices - Array of stock prices where prices[i] is the price on day i.
 * @return {number} The maximum profit achievable.
 */

var maxProfit = function (prices) {
  // Step 1: Initialize minimum price and maximum profit
  // Set the initial minimum price to a very high value (Infinity)
  // Initialize maximum profit to 0
  let minPrice = Infinity;
  let maxProfit = 0;

  // Step 2: Iterate through the prices array
  for (let price of prices) {
    // Step 2.1: Update the minimum price if the current price is lower
    if (price < minPrice) {
      minPrice = price;
    }

    // Step 2.2: Calculate the profit for the current price
    const profit = price - minPrice;

    // Step 2.3: Update the maximum profit if the current profit is greater
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  // Step 3: Return the maximum profit
  return maxProfit;
};

// Export for testing
module.exports = maxProfit;
