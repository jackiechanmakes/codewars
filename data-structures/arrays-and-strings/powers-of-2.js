/*
 * Complete the function that takes a non-negative integer n as input, and
 * returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
 *
 * Examples
 * n = 0  ==> [1]        # [2^0]
 * n = 1  ==> [1, 2]     # [2^0, 2^1]
 * n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
 */

/* Alternate solution #1 - using spread operator */
function powersOfTwo(num) {
    return [...Array(num + 1)].map((_, ind) => 2 ** ind);
}

/* Initial solution */
// function powersOfTwo(num) {
//     return Array(num + 1).fill(0).map((el, ind) => Math.pow(2, ind));
// }

// Test cases
console.log(powersOfTwo(0));  // [1]
console.log(powersOfTwo(1));  // [1, 2]
console.log(powersOfTwo(4));  // [1, 2, 4, 8, 16]
