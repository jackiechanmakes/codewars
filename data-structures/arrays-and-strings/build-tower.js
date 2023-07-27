/*
 * Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
 *
 * For example, a tower with 3 floors looks like this:
 *
 * [
 *   "  *  ",
 *   " *** ",
 *   "*****"
 * ]
 * And a tower with 6 floors looks like this:
 *
 * [
 *   "     *     ",
 *   "    ***    ",
 *   "   *****   ",
 *   "  *******  ",
 *   " ********* ",
 *   "***********"
 * ]
 */

/* Improved solution #2 - readability and easier to understand */
function towerBuilder(numFloors) {
    return Array.from({length: numFloors}, function(v, k) {
        let spaces = ' '.repeat(numFloors - k - 1);
        let stars = '*'.repeat(k + k + 1);
        let floor = spaces + stars + spaces;
        return floor;
    });
}

/* Improved solution #1 - readability */
// function towerBuilder(numFloors) {
//     let result = [];
//     for (let i = 0; i < numFloors; i++) {
//         let spaces = ' '.repeat(numFloors - i - 1);
//         let stars = '*'.repeat(2 * i + 1);
//         let floor = spaces + stars + spaces;
//         result.push(floor);
//     }

//     return result;
// }

/* Initial solution */
// function towerBuilder(numFloors) {
//     let result = [];
//     let floorIndex = 0;

//     while(numFloors) {
//         let floor = ' '.repeat(numFloors - 1) + '*'.repeat(1 + floorIndex * 2) + ' '.repeat(numFloors - 1);
//         result.push(floor);
//         floorIndex++;
//         numFloors--;
//     }

//     return result;
// }

// Test cases
console.log(towerBuilder(1));   // ["*"]
console.log(towerBuilder(2));   // [" * ","***"]
console.log(towerBuilder(3));   // ["  *  "," *** ","*****"]
