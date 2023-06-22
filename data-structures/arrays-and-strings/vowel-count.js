/*
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, u as vowels (but not y).
 * The input string will only consist of lower case letters and/or spaces.
 */

// function getCount(str) {
//     let vowels = 'aeiou';
//     return str.split('').reduce((previousResult, currentElement) => vowels.includes(currentElement) ? ++previousResult : previousResult, 0);
// }

function getCount(str) {
    let vowels = 'aeiou';
    return str.split('').filter(element => vowels.includes(element)).length;
}

// Test cases
console.log(getCount("abracadabra")); // 5
