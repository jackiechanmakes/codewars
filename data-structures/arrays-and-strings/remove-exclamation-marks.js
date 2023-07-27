/*
 * Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 */

/* Alternate solution #2 - using split property */
// function removeExclamationMarks(str) {
//     return str.replaceAll('!', '');
// }

/* Alternate solution #1 - using split property */
function removeExclamationMarks(str) {
    return str.split('!').join('');
}

/* Iniitial solution */
// function removeExclamationMarks(str) {
//     return str.split('').filter(el => el !== '!').join('');
// }

// Test cases
console.log(removeExclamationMarks("Hello World!")); // "Hello World"
