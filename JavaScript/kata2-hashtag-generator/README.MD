# Hashtag Generator

## Problem Analysis

The goal is to create a **Hashtag Generator** that processes input text into a valid hashtag for the marketing team. The generator must meet the following rules:
1. The hashtag must start with a `#`.
2. Each word in the input must have its first letter capitalized.
3. The final result must not exceed 140 characters.
4. If the input is empty or results in an invalid hashtag (e.g., empty after processing), it must return `false`.

---

## Problem Breakdown with Examples

### **Input**

- A string of text, which may:
  - Contain multiple spaces between words.
  - Be empty or consist only of spaces.
  - Include special characters or numbers.

### **Output**

- A valid hashtag that:
  - Starts with `#`.
  - Capitalizes each word's first letter.
  - Joins words without spaces.
  - Is no longer than 140 characters.
  - Returns `false` if the input is empty or the result is invalid.

---

## Steps to Solve (with Examples)

### **Step 1: Trim the Input**
Remove unnecessary leading and trailing spaces.

| Input                 | After Trimming  |
|-----------------------|-----------------|
| `"   hello world   "` | `"hello world"` |
| `"   "`               | `""`            |

---

### **Step 2: Validate Input**
Check if the trimmed input is empty. If yes, return `false`.

| Input (After Trimming) | Output |
|------------------------|--------|
| `""`                  | `false`|
| `"hello world"`       | Continue|

---

### **Step 3: Split the Input into Words**
Break the string into individual words by spaces.

| Input           | After Splitting       |
|-----------------|-----------------------|
| `"hello world"` | `["hello", "world"]`  |
| `"hello   world"` | `["hello", "world"]` |

---

### **Step 4: Capitalize Each Word**
Capitalize the first letter of each word and make the rest lowercase.

| Input               | After Capitalizing  |
|---------------------|----------------------|
| `["hello", "world"]` | `["Hello", "World"]`|
| `["heLLo", "wORld"]` | `["Hello", "World"]`|

---

### **Step 5: Join Words and Prepend `#`**
Join the words into a single string without spaces and add `#` at the beginning.

| Input                | Output            |
|----------------------|-------------------|
| `["Hello", "World"]` | `"#HelloWorld"`   |
| `["Crypto", "@World"]` | `"#Crypto@World"`|

---

### **Step 6: Validate the Hashtag**
Check if the resulting hashtag exceeds 140 characters. If it does, return `false`.

| Input                  | Output   |
|------------------------|----------|
| `"a".repeat(140)`      | `false`  |
| `"a".repeat(139)`      | `"#A...A"` (140 chars)|

---

## Examples Table

| Input                               | Expected Output       |
|-------------------------------------|-----------------------|
| `"hello world"`                     | `"#HelloWorld"`       |
| `"   hello     world   "`           | `"#HelloWorld"`       |
| `"a ".repeat(140)`                  | `false`               |
| `""`                                | `false`               |
| `"     "`                           | `false`               |
| `"heLLo wORld"`                     | `"#HelloWorld"`       |
| `"hello @world"`                    | `"#Hello@world"`      |
| `"123 hello"`                       | `"#123Hello"`         |
| `"a".repeat(139)`                   | `"#A...A"` (140 chars)|

---

## Time and Space Complexity

- **Time Complexity:** \(O(n)\), where \(n\) is the length of the input string. This is because:
  - Trimming, splitting, and joining are linear operations.
  - Capitalizing each word also runs linearly.
- **Space Complexity:** \(O(n)\), since we store the words array, processed words, and the final hashtag.

---

## Testing Focus

1. **Basic Valid Input:**
   - Input: `"hello world"` → Output: `"#HelloWorld"`

2. **Edge Cases:**
   - Empty input → `false`.
   - Spaces-only input → `false`.
   - Strings exceeding 140 characters → `false`.
   - Special characters and numbers remain unchanged but processed.

3. **Performance:**
   - Handles large input strings efficiently.

