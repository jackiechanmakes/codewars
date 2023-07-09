/*
 * There is an array of strings. All strings contains similar letters except one. Try to find it!
 *
 * findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
 * findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
 * Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters.
 * E.g. string that contains only spaces is like empty string.
 *
 * It’s guaranteed that array contains more than 2 strings.
 *
 * This is the second kata in series:
 * - Find the unique number
 * - Find the unique string (this kata)
 * - Find The Unique
 *
 */

/* Improved solution - uses Set object, which allows you to store only unique values */
let getUniq = (el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el);
let getUniqs = el => [...new Set([...el.toLowerCase()].sort())].join('');
let findUniq = (arr) => arr[arr.map(getUniqs).findIndex(getUniq)];

/* Initial solution */
// function findUniq(arr) {
//   let processedArr = arr.map(el => el.toLowerCase().split('').sort().filter((el, ind, arr) => el !== arr[ind - 1]).join(''));
//   let uniqueEl;

//   for (let i = 0; i < processedArr.length; i++) {
//     let element = processedArr[i];
//     if (processedArr.indexOf(element) === processedArr.lastIndexOf(element)) {
//       uniqueEl = element;
//       break;
//     }
//   }

//   let index = processedArr.indexOf(uniqueEl);
//   return arr[index];
// }

// Test cases
console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]));           // 'BbBb'
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]));               // 'foo'
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]));                                  // 'victor'
console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]));   // 'Harry Potter'
console.log(findUniq([ '    ', 'a', ' ' ]));                                              // 'a'
