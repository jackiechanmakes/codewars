/*
 * Consider an array/list of sheep where some sheep may be missing from their place.
 * We need a function that counts the number of sheep present in the array (true means present).
 *
 * For example:
 *
 * [true,  true,  true,  false,
 *   true,  true,  true,  true ,
 *   true,  false, true,  false,
 *   true,  false, false, true ,
 *   true,  true,  true,  true ,
 *   false, false, true,  true]
 *
 * The correct answer would be 17.
 */

function countSheeps(sheeps) {
    return sheeps.filter(Boolean).length;
}

// function countSheeps(sheeps) {
//     return sheeps.reduce((accum, curr) => curr ? ++accum : accum, 0);
// }

// Test cases
var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

console.log(countSheeps(array1)); // 17
