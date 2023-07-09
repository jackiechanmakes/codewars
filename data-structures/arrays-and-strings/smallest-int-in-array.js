/*
 * Given an array of integers your solution should find the smallest integer.
 *
 * For example:
 *
 * Given [34, 15, 88, 2] your solution will return 2
 * Given [34, -345, -1, 100] your solution will return -345
 * You can assume, for the purpose of this kata, that the supplied array will not be empty.
 */

/* Solution #1 - using Math.min() */
// function findSmallestInt(nums) {
//     return Math.min(...nums);
// }

/* Solution #2 - using reduce() */
function findSmallestInt(nums) {
    return nums.reduce((accu, curr) => curr < accu ? accu = curr : accu, Infinity);
}

/* Solution #3 - using sort() */
// function findSmallestInt(nums) {
//     return nums.sort((a,b) => a - b)[0];
// }

// Test cases
console.log(findSmallestInt([78,56,232,12,8]));     // 8
console.log(findSmallestInt([78,56,232,12,18]));    // 12
console.log(findSmallestInt([78,56,232,412,228]));  // 56
console.log(findSmallestInt([78,56,232,12,0]));     // 0
console.log(findSmallestInt([1,56,232,12,8]));      // 1
