/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/
const str = "hello world"
function countVowels(str) {
  let count =0; 
  for(let i=0; i<str.length; i++){
     
    if("AEIOUaeiou".includes(str[i]))
      count++;
  }
  return count;
}
console.log(countVowels(str));


module.exports = { countVowels };

// function countVowels(str) {
//   let result = 0;
//   for (let i=0; i<str.length; i++) {
//     if(charat(i) == 'a'|'e'|'i'|'o'|'u'|'A'|'E'|'I'|'O'|'U') {
//       result++;
//     }
//   }
//   return result;
// }

// console.log(countVowels(str));

