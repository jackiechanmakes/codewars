/*
 * You will be given an array of numbers.
 * You have to sort the odd numbers in ascending order while leaving the even numbers
 * at their original positions.
 *
 * Examples
 * [7, 1]  =>  [1, 7]
 * [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
 * [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 */

/* Solution #2 - uses shift() and doesn't set el % 2 to equal anything as check so encompasses both cases
with odd num is positive or negative */
function sortArray(arr) {
    let odds = arr.filter(el => el % 2).sort((a, b) => a - b);
    return arr.map(el => el % 2 ? odds.shift() : el);
}

/* Solution #1 */
// function sortArray(arr) {
//     let odds = arr.filter(el => el % 2 === 1 || el % 2 === -1);
//     odds.sort((a, b) => a - b);
//     let oddsCount = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];

//         if (element % 2 === 1 || element % 2 === -1) {
//             arr[i] = odds[oddsCount];
//             oddsCount++;
//         }
//     }

//     return arr;
// }

// Test cases
console.log(sortArray([5, 3, 2, 8, 1, 4]));  // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0]));     // [1, 3, 5, 8, 0]
console.log(sortArray([]));                  // []
console.log(sortArray([ -37, -37, -15, 42, 8, 34, -31, -10, 15, -5, 27, -2, -24, -36, -4, -34, 8, -16, -28 ])); // [ -37, -37, -31, 42, 8, 34, -15, -10, -5, 15, 27, -2, -24, -36, -4, -34, 8, -16, -28 ]
