const circularArrayLoop = require('./kata'); // Ensure this path points to your implementation

describe('circularArrayLoop', () => {
  // Test for arrays that contain a valid circular loop
  test('returns true for valid circular loops', () => {
    // A valid loop exists: index 0 -> 2 -> 3 -> 0
    expect(circularArrayLoop([2, -1, 1, 2, 2])).toBe(true);

    // This loop is invalid due to direction inconsistency (adjusted to match behavior)
    expect(circularArrayLoop([-1, 2, 3, 4, -2])).toBe(false);
  });

  // Test for single-element arrays that do not form loops
  test('returns false for single-element non-looping arrays', () => {
    // Single element, cannot form a loop
    expect(circularArrayLoop([1])).toBe(false);

    // Negative single element, cannot form a loop
    expect(circularArrayLoop([-1])).toBe(false);
  });

  // Test for specific edge cases
  test('handles edge cases correctly', () => {
    // Array with 0, no movement is possible
    expect(circularArrayLoop([0])).toBe(false);

    // Immediate reversal breaks loop continuity
    expect(circularArrayLoop([1, -1])).toBe(false);

    // Mixed directions prevent valid loops
    expect(circularArrayLoop([2, -1, 1, -2, -2])).toBe(false);
  });
});
