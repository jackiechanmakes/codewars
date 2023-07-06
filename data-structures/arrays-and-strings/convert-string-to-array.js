/*
 * Write a function to split a string and convert it into an array of words.
 *
 * Examples (Input ==> Output):
 * "Robin Singh" ==> ["Robin", "Singh"]
 *
 * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
 */

/* Solution #2 - practice with fundamentals if split() wasn't available as a method to use */
// function stringToArray(str) {
//     let result = [];
//     let index = str.indexOf(' ');

//     while (index !== -1) {
//         let word = str.slice(0, index);
//         result.push(word);
//         str = str.slice(index + 1, str.length);
//         index = str.indexOf(' ');
//     }

//     if (index === -1) {
//         result.push(str);
//     }

//     return result;
// }

/* Initial solution */
function stringToArray(str) {
    return str.split(' ');
}

// Test cases
// console.log(stringToArray("Robin Singh"));                         // ["Robin", "Singh"]
console.log(stringToArray("I love arrays they are my favorite"));  // ["I", "love", "arrays", "they", "are", "my", "favorite"]
