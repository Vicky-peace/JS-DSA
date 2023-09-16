// Write a function which takes in a string and returns counts of each character in the string

function countCharacters(str) {
  const charCount = {};

  for (let char of str) {
    // Check if the character is already in charCount object
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

// Example usage
const inputString = "hello world hello";
const result = countCharacters(inputString);
console.log(result);
