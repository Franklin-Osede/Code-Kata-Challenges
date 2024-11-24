/**
 * Jest Test Suite for Kata 01: Count Characters in a String
 *
 * Tests:
 * 1. Verifies the function counts characters correctly in a normal string.
 * 2. Ensures an empty string returns an empty object.
 * 3. Confirms case sensitivity ('a' and 'A' are treated differently).
 * 4. Checks the function handles strings with unique characters.
 * 5. Tests a longer string with multiple repeating characters.
 */

const count = require('./kata'); // Import the function to test.

describe("Kata 01: Count Characters in a String", () => {
  test("Counts characters in 'hello'", () => {
    // Example input "hello" should return correct character counts.
    expect(count("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });

  test("Handles an empty string", () => {
    // An empty string should return an empty object.
    expect(count("")).toEqual({});
  });

  test("Is case-sensitive", () => {
    // Case sensitivity: 'a' and 'A' are treated as different characters.
    expect(count("aaAA")).toEqual({ a: 2, A: 2 });
  });

  test("Counts unique characters correctly", () => {
    // A string with unique characters should return counts of 1 for each.
    expect(count("abc")).toEqual({ a: 1, b: 1, c: 1 });
  });

  test("Handles longer strings with multiple repetitions", () => {
    // A longer string should return correct counts for all characters.
    expect(count("aabbccddeeff")).toEqual({
      a: 2, b: 2, c: 2, d: 2, e: 2, f: 2,
    });
  });
});
