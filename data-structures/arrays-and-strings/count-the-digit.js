/*
 * Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
 *
 * Square all numbers k (0 <= k <= n) between 0 and n.
 *
 * Count the numbers of digits d used in the writing of all the k**2.
 *
 * Implement the function taking n and d as parameters and returning this count.
 *
 * Examples:
 * n = 10, d = 1
 * the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
 * We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
 *
 * The function, when given n = 25 and d = 1 as argument, should return 11 since
 * the k*k that contain the digit 1 are:
 * 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
 * So there are 11 digits 1 for the squares of numbers between 0 and 25.
 * Note that 121 has twice the digit 1.
 */

/* Solution #3 */
function nbDig(n, d) {
    return [...Array(n+1).keys()].map((i) => {
      return i * i;
    })
    .join('')
    .split('')
    .filter((i) => {
      return i == d;
    }).length;
}

/* Solution #2 */
// function nbDig(n, d) {
//     var o = '';
//       for(var i = 0; i <= n; i++){
//         o += Math.pow(i, 2);
//       }
//     return o.split(d).length-1
//   }


/* Solution #1 */
// function nbDig(n, d) {
//     let count = 0;

//     for (let i = 0; i <= n; i++) {
//       let k = `${i * i}`;
//       while (k.indexOf(`${d}`) !== -1) {
//         count++;
//         k = k.slice(k.indexOf(`${d}`) + 1);
//       }
//     }

//     return count;
// }

// Test cases
console.log(nbDig(   10, 1)); //  4
console.log(nbDig(   25, 1)); //  11
console.log(nbDig( 5750, 0)); //  4700
console.log(nbDig(11011, 2)); //  9481
console.log(nbDig(12224, 8)); //  7733
console.log(nbDig(11549, 1)); // 11905
