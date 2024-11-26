function generateHashtag(input) {
  // Step 1: Trim the input to remove leading and trailing whitespace
  const trimmedInput = input.trim(); // Example: "   hello world   " -> "hello world"

  // Step 2: Validate if the input is empty after trimming
  if (trimmedInput.length === 0) {
    return false; // Example: "   " -> false
  }

  // Step 3: Split the input into words using spaces as a delimiter
  const words = trimmedInput.split(/\s+/); // Example: "hello   world" -> ["hello", "world"]

  // Step 4: Capitalize the first letter of each word
  const capitalizedWords = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ); // Example: ["hello", "world"] -> ["Hello", "World"]

  // Step 5: Join the words into a single string and prepend a hashtag
  const hashtag = `#${capitalizedWords.join('')}`; // Example: ["Hello", "World"] -> "#HelloWorld"

  // Step 6: Validate the length of the resulting hashtag
  if (hashtag.length > 140) {
    return false; // Example: A hashtag with 141 characters -> false
  }

  // Step 7: Return the valid hashtag
  return hashtag; // Example: "#HelloWorld"
}

module.exports = generateHashtag;
