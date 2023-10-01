/*
 * Write a function which converts the input string to uppercase.
 */

function makeUpperCase(str) {
    return str.toUpperCase();
}

// Test cases
console.log(makeUpperCase("")     );  //      ""
console.log(makeUpperCase("hello"));  // "HELLO"
console.log(makeUpperCase("Hello"));  // "HELLO"
console.log(makeUpperCase("HELLO"));  // "HELLO"
