/*
 * Build a function that returns an array of integers from n to 1 where n>0.
 *
 * Example : n=5 --> [5,4,3,2,1]
 */

/* Initial solution */
// function reverseSeq(num) {
//     let result = [];

//     while (num) {
//         result.push(num);
//         num--;
//     }

//     return result;
// }

/* Alternate solution - using Array(), fill(), and map() */
function reverseSeq(num) {
    return Array(num).fill().map((e, i) => num - i);
}

// Test cases
console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]
