/*
 * Write a function that checks if a given string (case insensitive) is a palindrome.
 * A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards,
 * such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".
 */

/* Solution #2 */
function isPalindrome(str) {
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
}
/* Solution #1 */
// function isPalindrome(str) {
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }

// Test cases
console.log(isPalindrome("a"));      // true
console.log(isPalindrome("aba"));    // true
console.log(isPalindrome("Abba"));   // true
console.log(isPalindrome("hello"));  // false
console.log(isPalindrome("Bob"));    // true
console.log(isPalindrome("Madam"));  // true
console.log(isPalindrome("AbBa"));   // true
console.log(isPalindrome(""));       // true
