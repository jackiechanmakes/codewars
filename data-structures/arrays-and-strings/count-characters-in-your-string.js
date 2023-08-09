/*
 * The main idea is to count all the occurring characters in a string.
 * If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
 *
 * What if the string is empty? Then the result should be empty object literal, {}.
 */

/* Solution #2 - using split() and forEach() */
function count(chars) {
    let result = {};
    chars.split('').forEach(el => result[el] ? result[el]++ : result[el] = 1);
    return result;
}

/* Solution #1 */
// function count(chars) {
//     let result = {};

//     for (let i = 0; i < chars.length; i++) {
//         let char = chars[i];
//         if (char in result) {
//             result[char]++;
//         } else {
//             result[char] = 1;
//         }
//     }

//     return result;
// }

// Test cases
console.log(count(''));    // {}
console.log(count('a'));   // {'a': 1}
console.log(count('ab'));  // {'a': 1, 'b': 1}
console.log(count('aba')); // {'a': 2, 'b': 1}
console.log(count('ABC')); // {'A': 1, 'B': 1, 'C': 1}
