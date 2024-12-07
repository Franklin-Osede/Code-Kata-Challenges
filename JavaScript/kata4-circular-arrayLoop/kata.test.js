const circularArrayLoop = require('./circularArrayLoop'); // Adjust the path to the function file

describe('circularArrayLoop', () => {
  // Test for arrays that contain a valid circular loop
  test('returns true for valid circular loops', () => {
    // A valid loop exists here: index 0 -> 2 -> 3 -> 0 (all positive direction)
    expect(circularArrayLoop([2, -1, 1, 2, 2])).toBe(true);

    // A valid loop exists here: index 1 -> 2 -> 3 -> 4 -> 1 (all positive direction)
    expect(circularArrayLoop([-1, 2, 3, 4, -2])).toBe(true);
  });

  // Test for arrays without any circular loop
  test('returns false for arrays without loops', () => {
    // No index forms a loop, as elements direct forward but do not revisit any index
    expect(circularArrayLoop([1, 2, 3, 4, 5])).toBe(false);

    // No index forms a loop, as all movements are in a negative direction, and no cycle occurs
    expect(circularArrayLoop([-2, -3, -9, -7])).toBe(false);
  });

  // Test for single-element arrays that do not form loops
  test('returns false for single-element non-looping arrays', () => {
    // Single-element arrays cannot form a loop; movement stops after one step
    expect(circularArrayLoop([1])).toBe(false);

    // Similar case but with a negative value; no loop can form
    expect(circularArrayLoop([-1])).toBe(false);
  });

  // Test for specific edge cases
  test('handles edge cases correctly', () => {
    // Edge case: An array with only a zero means no movement, so no loop is possible
    expect(circularArrayLoop([0])).toBe(false);

    // Edge case: Two elements reversing directions immediately; no loop can form
    expect(circularArrayLoop([1, -1])).toBe(false);

    // Edge case: Mixed directions break the continuity of any potential loop
    expect(circularArrayLoop([2, -1, 1, -2, -2])).toBe(false);
  });
});
