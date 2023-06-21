/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more
 * letter words reversed. Strings passed in will consist of only letters and spaces.
 * Spaces will be included only when more than one word is present.
 *
 * spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
 * spinWords( "This is a test") => returns "This is a test"
 * spinWords( "This is another test" )=> returns "This is rehtona test"
 */

function spinWords(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length >= 5) {
            words[i] = word.split('').reverse().join('');
        }
    }

    return words.join(' ');
}

// Test cases
console.log(spinWords( "Hey fellow warriors" )); // returns "Hey wollef sroirraw"
console.log(spinWords( "This is a test")); // returns "This is a test"
console.log(spinWords( "This is another test" )); // returns "This is rehtona test"
