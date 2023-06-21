/*
 * Implement a function that accepts 3 integer values a, b, c.
 * The function should return true if a triangle can be built with the sides of given length and false in any other case.
 * (In this case, all triangles must have surface greater than 0 to be accepted).
 */

function isTriangle(side1, side2, side3) {
    // Triangle Inequality Theorem - the sum of the lengths of any two sides of a triangle must be greater than the lengths
    // of the third side
    return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
}

// Test cases
console.log(isTriangle(1,2,2)); // true
console.log(isTriangle(7,2,2)); // false
