/*
 * When provided with a number between 0-9, return it in words.
 *
 * Input :: 1
 *
 * Output :: "One".
 *
 * If your language supports it, try using a switch statement.
 */

/* Solution #2 */
function switchItUp(n){
    return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n]
}

/* Solution #1 */
// function switchItUp(number){
//     return number === 0 ? "Zero"  :
//       number === 1 ? "One"   :
//       number === 2 ? "Two"   :
//       number === 3 ? "Three" :
//       number === 4 ? "Four"  :
//       number === 5 ? "Five"  :
//       number === 6 ? "Six"   :
//       number === 7 ? "Seven" :
//       number === 8 ? "Eight" :
//       number === 9 ? "Nine"  : "Error";
// }


// Test cases
console.log(switchItUp(1));  // "One"
console.log(switchItUp(3));  // "Three"
console.log(switchItUp(5));  // "Five"
