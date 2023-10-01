/*
 * Given two integers a and b, which can be positive or negative,
 * find the sum of all the integers between and including them and return it.
 * If the two numbers are equal return a or b.
 *
 * Note: a and b are not ordered!
 *
 * Examples (a, b) --> output (explanation)
 * (1, 0) --> 1 (1 + 0 = 1)
 * (1, 2) --> 3 (1 + 2 = 3)
 * (0, 1) --> 1 (0 + 1 = 1)
 * (1, 1) --> 1 (1 since both are same)
 * (-1, 0) --> -1 (-1 + 0 = -1)
 * (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
 * Your function should only return a number, not the explanation about how you get that number.
 */

/* Solution #2 */
function getSum(a, b) {
    let sum = 0;
    let smallerNum = a < b ? a : b;
    let biggerNum = a > b ? a : b;

    for (let i = smallerNum; i <= biggerNum; i++) {
        sum += i;
    }

    return sum;
}

/* Solution #1 */
// function _getSum(num1, num2) {
//     let sum = 0;

//     for (let i = num1; i <= num2; i++) {
//         sum += i;
//     }

//     return sum;
// }

// function getSum(num1, num2) {
//     if (num1 === num2) {
//         return num1;
//     } else if (num1 < num2) {
//         return _getSum(num1, num2);
//     } else {
//         return _getSum(num2, num1);
//     }
// }

// Test cases
console.log(getSum(0,-1));  // -1
console.log(getSum(0, 1));  //  1
console.log(getSum(2, 2));  //  2
