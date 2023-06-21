/*
 * The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears
 * only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when
 * determining if a character is a duplicate.
 *
 * Examples:
 * "din"      =>  "((("
 * "recede"   =>  "()()()"
 * "Success"  =>  ")())())"
 * "(( @"     =>  "))(("
 */

function duplicateEncode(word) {
    return word
    .toLowerCase()
    .split('')
    .map(function(currentValue, index, arr) {
        return arr.indexOf(currentValue) === arr.lastIndexOf(currentValue) ? '(' : ')';
    })
    .join('');
}

// Test cases
console.log(duplicateEncode("din"));      // "((("
console.log(duplicateEncode("recede"));   // "()()()"
console.log(duplicateEncode("Success"));  // ")())())"
console.log(duplicateEncode("(( @"));     // "))(("
