/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more
 * letter words reversed. Strings passed in will consist of only letters and spaces.
 * Spaces will be included only when more than one word is present.
 *
 * spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
 * spinWords( "This is a test") => returns "This is a test"
 * spinWords( "This is another test" )=> returns "This is rehtona test"
 */

function spinWords(str) {
    let result = [];
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length < 5) {
            result.push(word);
        } else {
            let wordReversed = reverseWord(word);
            result.push(wordReversed);
        }
    }

    return result.join(' ');
}

function reverseWord(word) {
    let result = "";

    for (let i = word.length - 1; 0 <= i; i--) {
        let letter = word[i];

        result += letter;
    }

    return result;
}

// Test cases
console.log(spinWords( "Hey fellow warriors" )); // returns "Hey wollef sroirraw"
console.log(spinWords( "This is a test")); // returns "This is a test"
console.log(spinWords( "This is another test" )); // returns "This is rehtona test"
