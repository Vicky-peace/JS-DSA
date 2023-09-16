// Write a function which takes in a string and returns counts of each character in the string

// function countCharacters(str) {
//   const charCount = {};

//   for (let char of str) {
//     // Check if the character is already in charCount object
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }
//   return charCount;
// }

// // Example usage
// const inputString = "hello world hello";
// const result = countCharacters(inputString);
// console.log(result);

function charCount(str) {
  // make an object to return at the end
  let result = {};

  // loop over string , for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    //if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
      // if thhe char is a number/letter AND not in object, add it to object and set value to 1
    } else {
      result[char] = 1;
    }
  }
  // if the character is something else (space , period etc) dont do anything
  // return object data at the end
  return result;
}

console.log(charCount("Hi there nigga"));
