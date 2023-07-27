/*
 * Check to see if a string has the same amount of 'x's and 'o's.
 * The method must return a boolean and be case insensitive. The string can contain any char.
 *
 * Examples input/output:
 *
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * XO("zzoo") => false
 */

/* Improved solution #1 - conciseness */
function XO(str) {
    str = str.toLowerCase().split('');
    return str.filter(el => el === 'x').length === str.filter(el => el === 'o').length;
}

/* Initial solution */
// function XO(str) {
//     let xCount = 0;
//     let oCount = 0;

//     for (let i = 0; i < str.length; i++) {
//         let letter = str[i];
//         if (letter === 'x' || letter === 'X') {
//             xCount++;
//         } else if (letter === 'o' || letter === 'O') {
//             oCount++;
//         }
//     }

//     return xCount === oCount;
// }

// Test cases
console.log(XO("ooxx"));      // true
console.log(XO("xooxx"));     // false
console.log(XO("ooxXm"));     // true
console.log(XO("zpzpzpp"));   // true
console.log(XO("zzoo"));      // false
console.log(XO('xo'));        // true
console.log(XO("xxOo"));      // true
console.log(XO("xxxm"));      // false
console.log(XO("Oo"));        // false
console.log(XO("ooom"));      // false
