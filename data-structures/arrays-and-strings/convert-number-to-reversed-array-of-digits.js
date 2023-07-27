/*
 * Convert number to reversed array of digits
 * Given a random non-negative number, you have to return the digits of this
 * number within an array in reverse order.
 *
 * Example(Input => Output):
 * 35231 => [1,3,2,5,3]
 * 0 => [0]
 */

/* Improved solution - uses Number as a callback function */
function digitize(num) {
    return String(num).split('').map(Number).reverse();
}


/* Initial Solution */
// function digitize(num) {
//     return String(num).split('').map(el => Number(el)).reverse();
// }


// Test cases
console.log(digitize(35231)); // [1,3,2,5,3]
console.log(digitize(0));     // [0]
