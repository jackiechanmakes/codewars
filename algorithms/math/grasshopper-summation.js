/*
 * Write a program that finds the summation of every number from 1 to num.
 * The number will always be a positive integer greater than 0.
 *
 * For example (Input -> Output):
 * 2 -> 3 (1 + 2)
 * 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
 */

/* Improved solution #2 - use math formula */
// function summation(num) {
//     return num * (num + 1) / 2;
// }

/* Improved solution #1 - use recursion */
function summation(num) {
    return num ? num + summation(num - 1) : 0;
}

/* Initial solution */
// function summation(num) {
//     let result = 0;

//     while (num) {
//         result += num;
//         num--;
//     }

//     return result;
// }

// Test cases
console.log(summation(1)); //  1
console.log(summation(2)); //  3
console.log(summation(8)); // 36
