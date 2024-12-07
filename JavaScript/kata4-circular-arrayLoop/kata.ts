function circularArrayLoopt(nums: number[]): boolean {
  const n = nums.length;

  const nextIndex = (currentIndex: number): number => {
    return (currentIndex + nums[currentIndex] + n) % n;
  };

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) continue;

    let slow = i, fast = i;

    while (
      nums[slow] * nums[nextIndex(slow)] > 0 &&
      nums[fast] * nums[nextIndex(fast)] > 0 &&
      nums[fast] * nums[nextIndex(nextIndex(fast))] > 0
    ) {
      slow = nextIndex(slow);
      fast = nextIndex(nextIndex(fast));

      if (slow === fast) {
        if (slow === nextIndex(slow)) break;
        return true;
      }
    }

    let marker = i;
    const direction = nums[i];
    while (nums[marker] * direction > 0) {
      const next = nextIndex(marker);
      nums[marker] = 0;
      marker = next;
    }
  }

  return false;
}
