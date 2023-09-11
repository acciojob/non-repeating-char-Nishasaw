function firstNonRepeatedChar(str) {
 // Write your code here
	const charFrequency = {};

  // Iterate through the string to count character occurrences
  for (const char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charFrequency[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  return null; // Return null if no non-repeated character is found

}
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
