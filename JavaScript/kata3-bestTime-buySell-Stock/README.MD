# Best Time to Buy and Sell Stock

## Problem Statement

I am given an array `prices` where:
- `prices[i]` is the price of a stock on the ith day.

My task is to determine the **maximum profit** I can achieve by:
1. Choosing a day to **buy** a stock.
2. Choosing a different day **in the future** to **sell** that stock.

### Rules:
- I **must buy before I sell**.
- If no profit can be made, I need to return `0`.

---

## Key Questions to Ask Myself

1. **What am I trying to find?**
   - I need to calculate the maximum difference between two prices where the lower price comes before the higher price.

2. **What happens if no profit is possible?**
   - I should return `0`. This could happen if the prices are always decreasing.

3. **How large can the input array be?**
   - The array can have between 1 and 100,000 prices.

4. **What’s the most efficient way to solve this?**
   - I can traverse the array once (\(O(n)\)) while keeping track of:
     1. The lowest price I’ve seen so far.
     2. The maximum profit I’ve calculated at each step.

5. **Why is a single pass enough?**
   - At each step, I only need two pieces of information:
     - The minimum price I’ve encountered so far.
     - The profit I would make if I sold at the current price.

---

## Steps I’ll Follow to Solve the Problem

### **Step 1: Understand the Input**
- The input is an array of stock prices. Example:
  - `prices = [7, 1, 5, 3, 6, 4]`

- I’ll ask myself:
  - What day should I buy the stock?
  - What day should I sell it to maximize profit?

---

### **Step 2: Initialize Key Variables**
- I’ll create two variables:
  1. `minPrice`: Tracks the **lowest price** I’ve seen so far. I’ll initialize it to a very high value (e.g., `Infinity`).
  2. `maxProfit`: Tracks the **maximum profit** I’ve calculated so far. I’ll start it at `0`.

---

### **Step 3: Traverse the Array**
- For each price in the array:
  1. I’ll check if it’s lower than `minPrice`. If yes, I’ll update `minPrice`.
  2. I’ll calculate the profit if I bought at `minPrice` and sold at the current price.
  3. If this profit is greater than `maxProfit`, I’ll update `maxProfit`.

---

### **Step 4: Return the Maximum Profit**
- After traversing the array, I’ll return the value of `maxProfit`.

---

## Examples Table

| Input                | Expected Output | My Reasoning                               |
|----------------------|-----------------|--------------------------------------------|
| `[7, 1, 5, 3, 6, 4]` | `5`             | Buy at `1` (Day 2), sell at `6` (Day 5).   |
| `[7, 6, 4, 3, 1]`    | `0`             | Prices decrease, so no profit is possible. |
| `[1, 2, 3, 4, 5]`    | `4`             | Buy at `1` (Day 1), sell at `5` (Day 5).   |
| `[5]`                | `0`             | Only one price, so no transactions possible.|

---

## Edge Cases to Think About

1. **Single Element:**
   - Input: `[7]`
   - Output: `0`
   - **Why?** I can’t sell without first buying, and with only one price, there’s no opportunity to sell.

2. **Decreasing Prices:**
   - Input: `[7, 6, 5, 4, 3]`
   - Output: `0`
   - **Why?** If prices are always decreasing, there’s no day where selling would result in a profit.

3. **Empty Array:**
   - Input: `[]`
   - Output: `0`
   - **Why?** With no prices, there’s nothing to buy or sell, so the profit is `0`.

4. **All Prices Equal:**
   - Input: `[5, 5, 5, 5]`
   - Output: `0`
   - **Why?** Buying and selling at the same price yields no profit.

---

## Testing Focus

### **Basic Cases**
1. **Valid Case:**
   - Input: `[7, 1, 5, 3, 6, 4]`
   - **Question:** Why is the best profit `5`?  
     - I buy at the lowest price (`1`) and sell at the highest price after that (`6`).

2. **Another Valid Case:**
   - Input: `[1, 2, 3, 4, 5]`
   - **Question:** Why is the profit `4`?  
     - I buy at the start (`1`) and sell at the last day (`5`).

---

### **Edge Cases**
1. **Single Element:**
   - Input: `[7]`
   - **Question:** Why is the result `0`?  
     - There’s no way to sell since I only have one price.

2. **Decreasing Prices:**
   - Input: `[7, 6, 5, 4, 3]`
   - **Question:** Why can’t I make a profit?  
     - Every day, the price drops, so there’s no opportunity to sell at a higher price.

3. **Empty Array:**
   - Input: `[]`
   - **Question:** Why should I return `0`?  
     - With no prices, there’s nothing to calculate, so the profit must be `0`.

4. **All Equal Prices:**
   - Input: `[5, 5, 5, 5]`
   - **Question:** Why can’t I make a profit here?  
     - Every transaction would result in no gain (`5 - 5 = 0`).

---

### **Performance Testing**
1. **Large Array:**
   - Input: Array with 100,000 elements.
   - **Question:** How do I ensure my code handles this efficiently?  
     - I’ll check if the function completes in a reasonable amount of time, confirming it runs in \(O(n)\).

---
