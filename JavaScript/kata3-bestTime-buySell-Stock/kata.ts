// Define a function to calculate the maximum profit
export function maxProfit(prices: number[]): number {
  // Step 1: Initialize minimum price and maximum profit
  let minPrice: number = Infinity; // Track the lowest price seen
  let maxProfit: number = 0;       // Track the maximum profit

  // Step 2: Iterate through the prices array
  for (const price of prices) {
    // Update the minimum price if the current price is lower
    if (price < minPrice) {
      minPrice = price;
    }

    // Calculate the profit for the current price
    const profit = price - minPrice;

    // Update maximum profit if the current profit is greater
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  // Step 3: Return the maximum profit
  return maxProfit;
}
