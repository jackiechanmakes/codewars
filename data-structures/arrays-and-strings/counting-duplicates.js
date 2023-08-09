/*
 * Write a function that will return the count of distinct case-insensitive
 * alphabetic characters and numeric digits that occur more than once in the input string.
 * The input string can be assumed to contain only alphabets (both uppercase and lowercase)
 * and numeric digits.
 *
 * Example
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

/* Solution #2 */
function duplicateCount(chars) {
    return chars.toLowerCase().split('').filter(
        (el, ind, arr) => arr.indexOf(el) !== ind && arr.lastIndexOf(el) === ind
        ).length;
}

/* Solution #1 */
// function duplicateCount(chars) {
//     let dupChars = '';

//     chars
//     .toLowerCase()
//     .split('')
//     .forEach(function(el, ind) {
//         if (chars.indexOf(el) !== ind && !dupChars.includes(el)) {
//             dupChars += el;
//         }
//     });

//     return dupChars.length;
// }

// Test cases
console.log(duplicateCount(""));                  // 0
console.log(duplicateCount("abcde"));             // 0
console.log(duplicateCount("aabbcde"));           // 2
console.log(duplicateCount("aabBcde"));           // 2
console.log(duplicateCount("Indivisibility"));    // 1
console.log(duplicateCount("Indivisibilities"));  // 2
