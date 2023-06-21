/*
 * Write a function which calculates the average of the numbers in a given list.
 * Note: Empty arrays should return 0.
 */

function findAverage(array) {
    return array.length ? array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length : 0;
}

// Test cases
console.log(findAverage([1,1,1]));   // 1
console.log(findAverage([1,2,3]));   // 2
console.log(findAverage([1,2,3,4])); // 2.5
