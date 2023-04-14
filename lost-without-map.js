/*
 * Given an array of integers, return a new array with each value doubled.
 *
 * For example:
 *
 * [1, 2, 3] --> [2, 4, 6]
 */

function maps(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let doubledElement = element * 2;
        result.push(doubledElement);
    }

    return result;
}

// Test cases
console.log(maps([1, 2, 3])); // [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4])); // [8, 2, 2, 2, 8]);
console.log(maps([2, 2, 2, 2, 2, 2])); // [4, 4, 4, 4, 4, 4]);
