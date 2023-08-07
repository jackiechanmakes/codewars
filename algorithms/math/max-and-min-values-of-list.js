/*
 * Your task is to make two functions ( max and min, or maximum and minimum, etc.,
 * depending on the language ) that receive a list of integers as input, and return the
 * largest and lowest number in that list, respectively.
 *
 * Examples (Input -> Output)
 * - [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
 * - [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
 * - [42, 54, 65, 87, 0]             -> min = 0, max = 87
 * - [5]                             -> min = 5, max = 5
 *
 * Notes
 * You may consider that there will not be any empty arrays/vectors.
 */

/* Attempt #2 */
function min(nums) {
    nums.sort((a, b) => (a - b));
    return nums[0];
}

function max(nums) {
    nums.sort((a, b) => (b - a));
    return nums[0];
}

/* Attempt #1 */
// function min(nums) {
//     let min = Infinity;

//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         if (num < min) {
//             min = num;
//         }
//     }

//     return min;
// }

// function max(nums) {
//     let max = -Infinity;

//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i];
//         if (num > max) {
//             max = num;
//         }
//     }

//     return max;
// }

// Test cases
console.log(min([-52, 56, 30, 29, -54, 0, -110]));   // -110
console.log(min([42, 54, 65, 87, 0]));               // 0
console.log(max([4,6,2,1,9,63,-134,566]));           // 566
console.log(max([5]));                               // 5
