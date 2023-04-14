/*
 * You get an array of numbers, return the sum of all of the positives ones.
 *
 * Example [1,-4,7,12] => 1 + 7 + 12 = 20
 * Note: if there is nothing to sum, the sum is default to 0.
 */

function sumOfPositives(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (0 < element) {
            sum += element;
        }
    }

    return sum;
}

// Test cases
console.log(sumOfPositives([1,2,3,4,5]));      // 15
console.log(sumOfPositives([1,-2,3,4,5]));     // 13
console.log(sumOfPositives([]));               // 0
console.log(sumOfPositives([-1,-2,-3,-4,-5])); // 0
console.log(sumOfPositives([-1,2,3,4,-5]));    // 9
