/*
 * Given an array of integers.
 *
 * Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
 * 0 is neither positive nor negative.
 *
 * If the input is an empty array or is null, return an empty array.
 *
 * Example:
 * For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
    if (input.length === 0 || input === null) {
        return [];
    }

    let res = [0, 0];

    for (let i = 0; i < input.length; i++) {
        let number = input[i];
        if (number > 0) {
            res[0]++;
        }
        if (number < 0) {
            res[1] += number;
        }
    }

    return res;
}

// Test cases
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // [10, -65]
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));      // [8, -50]
