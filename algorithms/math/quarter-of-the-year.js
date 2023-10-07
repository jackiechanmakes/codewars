/*
 * Given a month as an integer from 1 to 12, return to which quarter of the year it
 * belongs as an integer number.
 *
 * For example: month 2 (February), is part of the first quarter; month 6 (June), is
 * part of the second quarter; and month 11 (November), is part of the fourth quarter.
 *
 * Constraint:
 *
 * 1 <= month <= 12
 */

/* Solution #2 */
function quarterOf(num) {
    return Math.ceil (num / 3);
}

/* Solution #1 */
// function quarterOf(num) {
//     return 1 <= num && num <= 3 ? 1 :
//            4 <= num && num <= 6 ? 2 :
//            7 <= num && num <= 9 ? 3 :
//            10 <= num && num <= 12 ? 4 :
//            0;
// }

// Test cases
console.log(quarterOf(3));   // 1
console.log(quarterOf(8));   // 3
console.log(quarterOf(11));  // 4
