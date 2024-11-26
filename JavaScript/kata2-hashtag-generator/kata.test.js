const generateHashtag = require('./kata');

describe('Hashtag Generator', () => {
  // Test case 1: Basic valid input
  test('should create a valid hashtag from a normal input', () => {
    expect(generateHashtag('hello world')).toBe('#HelloWorld');
  });

  // Test case 2: Empty input
  test('should return false for empty input', () => {
    expect(generateHashtag('')).toBe(false);
  });

  // Test case 3: Input with only spaces
  test('should return false for spaces-only input', () => {
    expect(generateHashtag('   ')).toBe(false);
  });

  // Test case 4: Handles excessive spaces between words
  test('should handle multiple spaces between words', () => {
    expect(generateHashtag('hello     world')).toBe('#HelloWorld');
  });

  // Test case 5: Input exceeding 140 characters
  test('should return false for input longer than 140 characters', () => {
    const input = 'a '.repeat(140); // Creates a 280-character string
    expect(generateHashtag(input)).toBe(false);
  });

  // Test case 6: Input exactly 140 characters
  test('should create a valid hashtag for input of exactly 140 characters', () => {
    const input = 'a'.repeat(139); // Creates a string of 139 characters
    expect(generateHashtag(input)).toBe(`#A${'a'.repeat(138)}`); // Only the first character is capitalized
  });

  // Test case 7: Handles mixed casing
  test('should normalize mixed casing in the input', () => {
    expect(generateHashtag('heLLo wORld')).toBe('#HelloWorld');
  });

  // Test case 8: Handles special characters
  test('should include special characters in the hashtag', () => {
    expect(generateHashtag('hello @world')).toBe('#Hello@world');
  });

  // Test case 9: Handles numeric inputs
  test('should process numbers correctly in the hashtag', () => {
    expect(generateHashtag('123 hello')).toBe('#123Hello');
  });

  // Test case 10: Input with a single word
  test('should create a hashtag from a single word input', () => {
    expect(generateHashtag('hello')).toBe('#Hello');
  });
});
