/*
 * A pangram is a sentence that contains every single letter of the alphabet at least once.
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
 * because it uses the letters A-Z at least once (case is irrelevant).
 *
 * Given a string, detect whether or not it is a pangram.
 * Return True if it is, False if not. Ignore numbers and punctuation.
 */

/* Solution #3 */
function isPangram(string) {
    return "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .every(el => string.toLowerCase().includes(el));
}

/* Solution #2 */
// function isPangram(string) {
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz"
//         .split("")
//         .every(el => string.indexOf(el) !== -1);
// }

/* Solution #1 */
// function isPangram(str) {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let alphaChars = '';

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();

//         if (char >= 'a' && char <= 'z' && !alphaChars.includes(char)) {
//             alphaChars += char;
//         }
//     }

//     return alphaChars.split("").sort().join("") === alphabet;
// }

// Test cases
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("This is not a pangram."));                       // false
var string = "The quick brown fox jumps over the lazy dog."
