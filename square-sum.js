/*
 * Complete the square sum function so that it squares each number passed into it and then sums the results together.
 *
 * For example, for [1, 2, 2] it should return 9 because
 * 1^2 + 2^2 + 2^2 = 9
 */

function squareSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        sum += element * element;
    }

    return sum;
}


// Test cases
console.log(squareSum([1, 2])); // 5
console.log(squareSum([0, 3, 4, 5])); // 50
console.log(squareSum([])); // 0
