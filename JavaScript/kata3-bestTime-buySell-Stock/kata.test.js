const maxProfit = require('./kata'); // Import the function to test

// Test cases for maxProfit
describe('maxProfit', () => {
  test('Example 1: Returns correct profit for increasing prices', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5); // Buy at 1, sell at 6
  });

  test('Example 2: Returns 0 for decreasing prices', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0); // No profit possible
  });

  test('Single element: Returns 0 as no transaction is possible', () => {
    expect(maxProfit([5])).toBe(0); // No transaction possible
  });

  test('Handles empty array gracefully', () => {
    expect(maxProfit([])).toBe(0); // No prices, no profit
  });

  test('Mixed prices: Returns the correct maximum profit', () => {
    expect(maxProfit([2, 4, 1, 10])).toBe(9); // Buy at 1, sell at 10
  });
});
