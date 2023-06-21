/*
 * Your task is to sort a given string. Each word in the string will contain a single number.
 * This number is the position the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 *
 * If the input string is empty, return an empty string. The words in the input string will only contain valid
 * consecutive numbers.
 *
 * Examples:
 * "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 * ""  -->  ""
 */

function order(str) {
    if (str.length === 0) {
        return str;
    }

    let words = str.split(' ');
    let numbers = '123456789'
    let index;

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let letters = word.split('');

        for (let j = 0; j < letters.length; j++) {
            let letter = letters[j];

            if (numbers.includes(letter)) {
                index = Number(letter) - 1;
            }
        }

        if (i !== index) {
            let temp = words[index];
            words[index] = word;
            words[i] = temp;
        }
    }

    return words.join(' ');
}

// Test cases
console.log(order("is2 Thi1s T4est 3a"));                 // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));   // "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order(""));                                   // ""
