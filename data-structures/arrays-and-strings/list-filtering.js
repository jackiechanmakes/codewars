/*
 * In this kata you will create a function that takes a list of non-negative integers and
 * strings and returns a new list with the strings filtered out.
 *
 * Example
 * filter_list([1,2,'a','b']) == [1,2]
 * filter_list([1,'a','b',0,15]) == [1,0,15]
 * filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */

/* Improved solution #2 */
// function filter_list(arr) {
//     return arr.filter(element => typeof element === 'number');
// }

/* Improved solution #1 - didn't need to write out function expression
 *  when Number.isInteger(value) is already a function
 */
function filter_list(arr) {
    return arr.filter(Number.isInteger);
}

/* Initial solution */
// function filter_list(arr) {
//     return arr.filter(element => Number.isInteger(element));
// }

// Test cases
console.log(filter_list([1,2,'a','b'])); // [1,2]
console.log(filter_list([1,'a','b',0,15])); // [1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])); // [1,2,123]
