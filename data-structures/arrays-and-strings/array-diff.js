/*
 * Implement a difference function, which subtracts one list from another and returns the result.
 *
 * It should remove all values from list a, which are present in list b keeping their order:
 * arrayDiff([1,2],[1]) == [2]
 *
 * If a value is present in b, all of its occurrences must be removed from the other:
 * arrayDiff([1,2,2,2,3],[2]) == [1,3]
 *
 */

function arrayDiff(arrA, arrB) {
    let result = arrA;

    for (let i = 0; i < arrB.length; i++) {
        forbiddenLetter = arrB[i];

        while (result.indexOf(forbiddenLetter) !== -1) {
            let index = result.indexOf(forbiddenLetter);
            result.splice(index, 1);
        }
    }

    return result;
}

// Test cases
console.log(arrayDiff([1,2], [1]));     // [2]
console.log(arrayDiff([1,2,2], [1]));   // [2,2]
console.log(arrayDiff([1,2,2], [2]));   // [1]
console.log(arrayDiff([1,2,2], []));    // [1,2,2]
console.log(arrayDiff([], [1,2]));      // []
console.log(arrayDiff([1,2,3], [1,2])); // [3]
