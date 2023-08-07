/*
 * Simple, given a string of words, return the length of the shortest word(s).
 *
 * String will never be empty and you do not need to account for different data types.
 */

/* Attempt #2 */
function findShort(str) {
    return Math.min(...str.split(' ').map(el => el.length));
}

/* Attempt #1 */
// function findShort(str) {
//     let words = str.split(' ');
//     return words.reduce(function (accu, curr) {
//         if (curr.length < accu) {
//             return curr.length;
//         }
//         return accu;
//     }, Infinity);
// }

// Test cases
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));                 // 3
console.log(findShort("turns out random test cases are easier than writing out basic ones"));  // 3
console.log(findShort("Let's travel abroad shall we"));                                        // 2
