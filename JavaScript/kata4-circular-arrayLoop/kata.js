/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  const n = nums.length;

  // Helper function to calculate the next index circularly
  const nextIndex = (currentIndex) => {
    return (currentIndex + nums[currentIndex] + n) % n;
  };

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) continue; // Skip indices already visited

    let slow = i, fast = i;

    // Traverse using Two Pointers
    while (
      nums[slow] * nums[nextIndex(slow)] > 0 && // Same direction for slow
      nums[fast] * nums[nextIndex(fast)] > 0 && // Same direction for fast
      nums[fast] * nums[nextIndex(nextIndex(fast))] > 0 // Same direction for fast's next step
    ) {
      slow = nextIndex(slow); // Slow pointer moves one step
      fast = nextIndex(nextIndex(fast)); // Fast pointer moves two steps

      // Cycle detected
      if (slow === fast) {
        // Check for cycle length > 1
        if (slow === nextIndex(slow)) break; // Single-element loop
        return true;
      }
    }

    // Mark all visited indices for this path
    let marker = i;
    const direction = nums[i];
    while (nums[marker] * direction > 0) {
      const next = nextIndex(marker);
      nums[marker] = 0; // Mark as visited
      marker = next;
    }
  }

  return false; // No valid cycle found
};
