/*
 * Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
 *
 * Examples (input -> output)
 * 6, "I"     -> "IIIIII"
 * 5, "Hello" -> "HelloHelloHelloHelloHello"
 */

function repeatStr (n, s) {
    if (n === 0) {
        return '';
    }

    return s + repeatStr(n - 1, s);
}

// Test cases
console.log(repeatStr(3, "*"));    // "***"
console.log(repeatStr(5, "#"));    // "#####"
console.log(repeatStr(2, "ha "));  // "ha ha "
