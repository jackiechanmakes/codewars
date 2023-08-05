/*
 * You are given two interior angles (in degrees) of a triangle.
 *
 * Write a function to return the 3rd.
 *
 * Note: only positive integers will be tested.
 *
 * https://en.wikipedia.org/wiki/Triangle
 */

function otherAngle(angle1, angle2) {
    return 180 - angle1 - angle2;
}

// Test cases
console.log(otherAngle(30, 60));  // 90
console.log(otherAngle(60, 60));  // 60
console.log(otherAngle(43, 78));  // 59
console.log(otherAngle(10, 20));  // 150
