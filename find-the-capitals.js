/*
 * Write a function that takes a single string (word) as argument.
 * The function must return an ordered list containing the indexes of all capital letters in the string.
 *
 * Example (Input --> Output)
 * "CodEWaRs" --> [0,3,4,6]
 */

function capitals(str) {
    return str.split('').
           map((el, ind) => ('A' <= el && el <= 'Z' ? ind : null)).
           filter(el => el !== null);
}

// Test cases
console.log(capitals('CodEWaRs')); // [0,3,4,6]
