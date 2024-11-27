const generateHashtag = require('./kata');

describe("generateHashtag", () => {

  // Test case 1: Ensure a single word input generates a valid hashtag.
  // Input: "hello" -> Output: "#Hello"
  it("should create a valid hashtag for a single word", () => {
    const input = "hello";
    const expectedOutput = "#Hello";
    expect(generateHashtag(input)).toBe(expectedOutput);
  });

  // Test case 2: Ensure multiple words input generates a valid hashtag with each word capitalized.
  // Input: "hello world" -> Output: "#HelloWorld"
  it("should create a valid hashtag for multiple words", () => {
    const input = "hello world";
    const expectedOutput = "#HelloWorld";
    expect(generateHashtag(input)).toBe(expectedOutput);
  });

  // Test case 3: Ensure the function returns false when the input is empty or contains only whitespace.
  // Input: "   " -> Output: false
  it("should return false for an empty input after trimming", () => {
    const input = "   ";
    const expectedOutput = false;
    expect(generateHashtag(input)).toBe(expectedOutput);
  });

  // Test case 4: Ensure the function returns false when the resulting hashtag exceeds 140 characters.
  // Input: A string with 140 'a' characters -> Output: false
  it("should return false for a hashtag exceeding 140 characters", () => {
    const input = "a".repeat(140); // Generate a string with 140 characters
    const expectedOutput = false;
    expect(generateHashtag(input)).toBe(expectedOutput);
  });
});
