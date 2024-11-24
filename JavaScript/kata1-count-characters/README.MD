# Kata 01: Count Characters in a String

## Problem Description

Write a function that counts how many times each character appears in a given string. The function must:

1. Be case-sensitive (e.g., `'a'` and `'A'` are considered different characters).
2. Return an empty object for an empty string.

### Examples:
- Input: `"hello"`
  Output: `{ 'h': 1, 'e': 1, 'l': 2, 'o': 1 }`

- Input: `"aaAA"`
  Output: `{ 'a': 2, 'A': 2 }`

- Input: `""`
  Output: `{}`

---

## Problem-Solving Approach

### 1. Analyze the Problem
- **What we need:** A function that counts how many times each character appears in the string.
- **What we know:**
  - We receive a single string as input.
  - The output must be an object:
    - Keys: Characters in the string.
    - Values: How many times each character appears.
- **Edge Cases:**
  - An empty string should return an empty object.
  - The function must differentiate between lowercase and uppercase characters.

---

### 2. Plan the Algorithm

**Steps:**
1. Start with an empty object (`characterCounts`) to store the results.
2. Loop through each character in the string.
3. For each character:
   - If it exists in the object, increment its count.
   - If it doesn’t exist, add it to the object with an initial count of `1`.
4. Return the `characterCounts` object.

---

## Complexity Analysis

### Time Complexity:
- **O(n):**  
  The algorithm processes each character in the string exactly once, where `n` is the length of the string.

### Space Complexity:
- **O(k):**  
  The space required depends on the number of unique characters `k` in the string. For example:
  - `"aaaa"` → `k = 1`
  - `"abc"` → `k = 3`

---

## Testing the Solution

This kata includes a set of test cases written using **Jest** to verify the implementation. Tests cover:
1. Basic functionality.
2. Edge cases like empty strings.
3. Case sensitivity.
4. Handling unique and repeated characters.

### Run the Tests:
1. Install Jest:
   ```bash
   npm install jest --save-dev
