/*
 * Write a function which calculates the average of the numbers in a given list.
 * Note: Empty arrays should return 0.
 */

function findAverage(array) {
    let sum = 0;
    let count = array.length;

    if (count === 0) {
        return 0;
    }

    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        sum += number;
    }

    let avg = sum / count;
    return avg;
}

// Test cases
console.log(findAverage([1,1,1]));   // 1
console.log(findAverage([1,2,3]));   // 2
console.log(findAverage([1,2,3,4])); // 2.5
