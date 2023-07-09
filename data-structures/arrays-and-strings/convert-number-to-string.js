/*
 * We need a function that can transform a number (integer) into a string.
 * What ways of achieving this do you know?
 *
 * Examples (input --> output):
 * 123  --> "123"
 * 999  --> "999"
 * -100 --> "-100"
 */

/* Solutions #1-4 in decreasing order of performance */
function numberToString(num) {
    return `${num}`;
}

// function numberToString(num) {
//     return '' + num;
// }

// function numberToString(num) {
//     return String(num);
// }

// function numberToString(num) {
//     return num.toString();
// }

// Test cases
console.log((numberToString(67))); // '67'
