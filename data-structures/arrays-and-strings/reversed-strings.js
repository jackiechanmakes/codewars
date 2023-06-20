/*
 * Complete the solution so that it reverses the string passed into it.
 * 'world' => 'dlrow'
 * 'word' => 'drow'
 */

function reverseString(word) {
    let result = "";

    for (let i = word.length - 1; 0 <= i; i--) {
        let letter = word[i];
        result += letter;
    }

    return result;
}


// Test cases
console.log(reverseString("world")); // "dlrow"
console.log(reverseString("word")); // "drow"
console.log(reverseString("")); // ""
console.log(reverseString("h")); // "h"
console.log(reverseString("hello")); // "olleh"
