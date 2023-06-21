/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more
 * letter words reversed. Strings passed in will consist of only letters and spaces.
 * Spaces will be included only when more than one word is present.
 *
 * spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
 * spinWords( "This is a test") => returns "This is a test"
 * spinWords( "This is another test" )=> returns "This is rehtona test"
 */

function spinWords(str) {
    return str.split(' ').map(word => word.length < 5 ? word : word.split('').reverse().join('')).join(' ');
}

// Test cases
console.log(spinWords( "Hey fellow warriors" )); // returns "Hey wollef sroirraw"
console.log(spinWords( "This is a test")); // returns "This is a test"
console.log(spinWords( "This is another test" )); // returns "This is rehtona test"
