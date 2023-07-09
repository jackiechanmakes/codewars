/*
 * Implement the function unique_in_order which takes as argument a sequence and returns a list of items
 * without any elements with the same value next to each other and preserving the original order of elements.
 *
 * For example:
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 * uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
 * uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

/* Improved solution - using filter() and spread operator on string with array*/
let uniqueInOrder = function(iterable) {
    return [...iterable].filter((el, ind) => el !== iterable[ind - 1]);
}

/* Improved solution - does not need to keep track of previous letter */
// let uniqueInOrder = function(iterable) {
//     let result = [];
//     for (let i = 0; i < iterable.length; i++) {
//         let currentLetter = iterable[i];
//         let nextLetter = iterable[i + 1];
//         if (currentLetter !== nextLetter) {
//             result.push(currentLetter)
//         }
//     }
//     return result;
// }


/* Initial solution */
// let uniqueInOrder = function(iterable) {
//     let result = [];
//     let prevLetter = '';

//     for (let i = 0; i < iterable.length; i++) {
//         let letter = iterable[i];
//         if (letter !== prevLetter) {
//             result.push(letter);
//         }
//         prevLetter = letter;
//     }

//     return result;
// }

// Test cases
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A','B','C','D','A','B'])
console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));       // [1,2,3]
