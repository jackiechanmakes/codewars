/*
 * Implement a function which convert the given boolean value into its string representation.
 *
 * Note: Only valid inputs will be given.
 */

/* Alternate solution #4 - add empty string */
// function booleanToString(bool) {
//     return bool + '';
// }

/* Alternate solution #3 - using literal string */
// function booleanToString(bool) {
//     return `${bool}`
// }

/* Alternate solution #2 - using .toString() */
// function booleanToString(bool) {
//     return bool.toString();
// }


/* Alternate solution #1 - using ternary operator */
// function booleanToString(bool) {
//     return bool ? 'true' : 'false';
// }

/* Initial solution */
function booleanToString(bool) {
    return String(bool);
}

// Test cases
console.log(booleanToString(true));   // "true"
console.log(booleanToString(false));  // "false"
