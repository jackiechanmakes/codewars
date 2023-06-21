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
    word = word.toLowerCase();
    let dictCount = count(word);
    let result = "";

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (dictCount[letter] > 1) {
            result += ")";
        } else {
            result += "(";
        }
    }

    return result;
}

function count(word) {
    let dict = {};

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letter in dict) {
            dict[letter]++;
        } else {
            dict[letter] = 1;
        }
    }

    return dict;
}

// Test cases
console.log(duplicateEncode("din"));      // "((("
console.log(duplicateEncode("recede"));   // "()()()"
console.log(duplicateEncode("Success"));  // ")())())"
console.log(duplicateEncode("(( @"));     // "))(("
