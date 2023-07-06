/*
 * Some numbers have funny properties. For example:
 * 89 --> 8¹ + 9² = 89 * 1
 * 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
 * 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 *
 * Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p,
 * we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to
 * the successive powers of p is equal to k * n.
 *
 * In other words:
 * Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
 *
 * If it is the case we will return k, if not return -1.
 *
 * Note: n and p will always be given as strictly positive integers.
 *
 * digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
 * digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
 * digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
 * digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 */

/* Improved solution #1 - so much better, uses the trick of getting digits of the number by turning number into a string and then
 * splitting it apart, taking advantage that JavaScript will convert string character to number if possible when a math operator
 * is acted upon it */
function digPow(n, p) {
    let expResult = String(n).split('').reduce((accum, curr, ind) => accum + Math.pow(curr, p + ind), 0);
    return expResult % n ? -1 : expResult / n;
}

/* Initial solution */
// function digPow(n, p){
//     let digits = [];
//     let nCopy = n;

//     // Get array of digits
//     while (nCopy) {
//         digits.unshift(nCopy % 10);
//         nCopy = Math.floor(nCopy / 10);
//     }

//     let k = digits.reduce((accum, curr) => accum + Math.pow(curr, p++), 0) / n;

//     return Number.isInteger(k) ? k : -1;
// }

// Test cases
console.log(digPow(89, 1));    //  1
console.log(digPow(92, 1));    // -1
console.log(digPow(46288, 3)); // 51
