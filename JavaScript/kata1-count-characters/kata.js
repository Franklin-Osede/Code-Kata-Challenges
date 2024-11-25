/**
 * @param {string} string - The input string.
 * @returns {Object} - An object with characters as keys and their counts as values.
 */


function count(string) {
  // Step 1: Initialize an empty object.
  let characterCounts = {};

  // Step 2: Iterate through the input string.
  for (let char of string) {
    // Step 3: Update the character count in the object.
    characterCounts[char] = (characterCounts[char] || 0) + 1;
  }
  // Step 4: Return the final object with counts.
  return characterCounts;

}
module.exports = count
// Export the function for use in tests.

