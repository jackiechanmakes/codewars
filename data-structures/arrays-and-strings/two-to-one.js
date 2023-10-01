/*
 * Take 2 strings s1 and s2 including only letters from a to z.
 * Return a new sorted string, the longest possible, containing distinct letters -
 * each taken only once - coming from s1 or s2.
 *
 * Examples:
 * a = "xyaabbbccccdefww"
 * b = "xxxxyyyyabklmopq"
 * longest(a, b) -> "abcdefklmopqwxy"
 *
 * a = "abcdefghijklmnopqrstuvwxyz"
 * longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

/* Solution #3 - use Set */
function longest(s1, s2) {
    return [...(new Set(s1 + s2))].sort().join('');
}

/* Solution #2 */
// function longest(s1, s2) {
//     let chars = s1 + s2;
//     return chars.split('').filter((el, ind) => ind === chars.lastIndexOf(el)).sort().join('');
// }

/* Solution #1 */
// function longest(s1, s2) {
//     let distinctLetters = '';

//     for (let i = 0; i < s1.length; i++) {
//         let letter = s1[i];

//         if (!distinctLetters.includes(letter)) {
//             distinctLetters += letter;
//         }
//     }

//     for (let j = 0; j < s2.length; j++) {
//         let letter = s2[j];

//         if (!distinctLetters.includes(letter)) {
//             distinctLetters += letter;
//         }
//     }

//     return distinctLetters.split('').sort().join('');
// }

// Test cases
console.log(longest("aretheyhere", "yestheyarehere"));                        // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));  // "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions"));            // "acefghilmnoprstuy"
