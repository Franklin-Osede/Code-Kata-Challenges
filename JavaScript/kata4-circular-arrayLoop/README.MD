# 🌀 Circular Array Loop

---

## 🌟 Problem Statement

You are given an array `nums` where:

- Each `nums[i]` represents the **number of steps** to move:
  - **Positive values (`> 0`)**: Move forward.
  - **Negative values (`< 0`)**: Move backward.
- The movement is **circular**:
  - Moving forward from the last index wraps to the first.
  - Moving backward from the first index wraps to the last.

### 🔍 Task

The goal is to determine if there is a **valid cycle** in the array. A valid cycle must satisfy:

1. **Consistent Direction**:
   - All numbers in the cycle must be either positive or negative.
2. **Cycle Length > 1**:
   - The cycle must involve more than one index.

If no valid cycle exists, the function should return `false`.

---

## 💡 Key Insights and Approach

### **What is Modular Arithmetic?**
- Modular arithmetic is a system of arithmetic for integers where numbers "wrap around" when reaching a certain value (the modulus).
- In this problem, it helps to calculate the **next index** in a circular array:
  - Example: If the array has length `5`, index `6` wraps to `1`, and index `-1` wraps to `4`.
  - Formula:
    ```javascript
    nextIndex = (currentIndex + nums[currentIndex] + nums.length) % nums.length;
    ```
  - Adding `nums.length` ensures backward movements remain positive.

---

### **Algorithm Steps**

#### **Step 1: Calculate the Next Index**
- Use modular arithmetic to ensure the index wraps around circularly:
  - Handle both forward and backward movements without going out of bounds.

#### **Step 2: Use Two Pointers**
- Utilize a **slow pointer** (1 step) and a **fast pointer** (2 steps):
  - Detect cycles by checking when the two pointers meet.
  - Validate the cycle's length and direction once detected.

#### **Step 3: Mark Visited Indices**
- Mark all indices along invalid paths as visited:
  - Use a marker value (`0`) to skip redundant checks.
  - Optimize performance by ensuring each index is processed at most once.

---

## 📊 Complexity Analysis

### **Time Complexity**
- **`O(n)`**:
  - Each index is processed at most twice (once for detection and once for marking).

### **Space Complexity**
- **`O(1)`**:
  - No additional data structures are used.
  - Modifies the input array directly to mark visited indices.

---

## ✅ Example Tests

### **Test Cases**

| Input                  | Expected Output | Explanation                                                                 |
|------------------------|-----------------|-----------------------------------------------------------------------------|
| `[2, -1, 1, 2, 2]`     | `true`          | Valid cycle: `0 → 2 → 3 → 0` (same direction, length > 1).                  |
| `[-1, -2, -3, -4, -5]` | `false`         | All indices move in the same direction, but no valid cycle of length > 1.  |
| `[1, -1]`              | `false`         | Single-element cycles (self-loops) are not valid.                          |
| `[1, 1, 1, 1]`         | `true`          | Entire array forms a valid cycle.                                          |

---

## 🛠️ Edge Cases to Test

1. **Single Element Array**:
   - Input: `[5]`
   - Expected Output: `false`
   - Reason: No valid cycle can exist in an array with one element.

2. **Mixed Directions**:
   - Input: `[2, -1, 1, 2, -2]`
   - Expected Output: `false`
   - Reason: Mixed directions break the cycle requirements.

3. **Large Arrays**:
   - Input: Array of size 5,000 with alternating positive and negative values.
   - Expected Output: `false`
   - Reason: No consistent direction is maintained for a valid cycle.

4. **Entire Array Forms a Cycle**:
   - Input: `[1, 1, 1, 1]`
   - Expected Output: `true`
   - Reason: The entire array forms a valid cycle as all movements are consistent.

---

## 🎯 Goal

- Ensure the algorithm:
  - Runs in \(O(n)\) time.
  - Uses \(O(1)\) space.
  - Correctly identifies valid cycles while skipping invalid paths.

