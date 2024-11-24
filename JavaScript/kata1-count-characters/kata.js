/**
 * Kata 01: Count Characters in a String
 *
 * Function to count how many times each character appears in a string.
 * 
 * Steps:
 * 1. Create an empty object to store character counts.
 * 2. Iterate through the input string character by character.
 * 3. For each character:
 *    - If it exists in the object, increment its value by 1.
 *    - If it does not exist, add it to the object with an initial value of 1.
 * 4. Return the object containing character counts.
 *
 * Example:
 * count("hello") => { h: 1, e: 1, l: 2, o: 1 }
 *
 * Complexity:
 * - Time Complexity: O(n), where `n` is the length of the string.
 * - Space Complexity: O(k), where `k` is the number of unique characters in the string.
 *
 * @param {string} string - The input string.
 * @returns {Object} - An object with characters as keys and their counts as values.
 */


function count(string) {
  // Step 1: Initialize an empty object.
  let characterCounts = {};

  // Step 2: Iterate through the input string.
  // Step 3: Update the character count in the object.
  for (let char of string) {
    characterCounts[char] = (characterCounts[char] || 0) + 1;
  }
  // Step 4: Return the final object with counts.
  return characterCounts;
}

// Export the function for use in tests.
module.exports = count; 
