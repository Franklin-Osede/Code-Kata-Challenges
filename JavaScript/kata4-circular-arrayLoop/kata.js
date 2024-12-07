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

  // Foor Loop to iterate and skip indices already visited
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) continue;

    //Initialize two pointers 
    let slow = i, fast = i;

    // Traverse using Two Pointers
    // Same direction for slow
    //Same direction for fast
    // Same direction for fast's next step
    // Same direction for fast's next step
    // Fast pointer moves two steps


    while (
      nums[slow] * nums[nextIndex(slow)] > 0 &&
      nums[fast] * nums[nextIndex(fast)] > 0 &&
      nums[fast] * nums[nextIndex(nextIndex(fast))] > 0
    ) {
      slow = nextIndex(slow);
      fast = nextIndex(nextIndex(fast));

      // Cycle detected
      // Check for cycle length > 1
      // Single-element loop

      if (slow === fast) {
        if (slow === nextIndex(slow)) break;
        return true;
      }
    }

    // Mark all visited indices for this path
    // Mark 0 as visited
    let marker = i;
    const direction = nums[i];
    while (nums[marker] * direction > 0) {
      const next = nextIndex(marker);
      nums[marker] = 0;
      marker = next;
    }
  }

  // No valid cycle found
  return false;
};
