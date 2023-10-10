/*
 * You might know some pretty large perfect squares. But what about the NEXT one?
 *
 * Complete the findNextSquare method that finds the next integral perfect square
 * after the one passed as a parameter. Recall that an integral perfect square is
 * an integer n such that sqrt(n) is also an integer.
 *
 * If the parameter is itself not a perfect square then -1 should be returned.
 * You may assume the parameter is non-negative.
 *
 * Examples:(Input --> Output)
 *
 * 121 --> 144
 * 625 --> 676
 * 114 --> -1 since 114 is not a perfect square
 */

/* Solution #2 */
function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

/* Solution #1 */
// function findNextSquare(num) {
//     let sqrt = Math.sqrt(num);

//     return sqrt === Math.floor(sqrt) ? (sqrt + 1) * (sqrt + 1) : -1;
// }

// Test cases
console.log(findNextSquare(121));           // 144
console.log(findNextSquare(625));           // 676
console.log(findNextSquare(319225));        // 320356
console.log(findNextSquare(15241383936));   // 15241630849
console.log(findNextSquare(155));           // -1
console.log(findNextSquare(342786627));     // -1
