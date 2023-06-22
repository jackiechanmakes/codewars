/*
 * Given an array of integers, find the one that appears an odd number of times.
 *
 * There will always be only one integer that appears an odd number of times.
 *
 * Examples
 * [7] should return 7, because it occurs 1 time (which is odd).
 * [0] should return 0, because it occurs 1 time (which is odd).
 * [1,1,2] should return 2, because it occurs 1 time (which is odd).
 * [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
 * [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */

function findOdd(array) {
    return array.reduce((previousResult, currentValue) => previousResult ^ currentValue, 0);
}

// function findOdd(array) {
//     let obj = {};
//     array.forEach(element => obj[element] ? obj[element]++ : obj[element] = 1);
//     return array.filter(num => obj[num] % 2 === 1)[0];
// }

// Test cases
console.log(findOdd([7]));                                        // 7
console.log(findOdd([0]));                                        // 0
console.log(findOdd([1,1,2]));                                    // 2
console.log(findOdd([0,1,0,1,0]));                                // 0
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));                // 4
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));  // 5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));                 // -1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));              // 5
console.log(findOdd([10]));                                       // 10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));                   // 10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));                  // 1
