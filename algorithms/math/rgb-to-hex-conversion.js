/*
 * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
 * Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
 *
 * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
 *
 * The following are examples of expected output values:
 * rgb(255, 255, 255) // returns FFFFFF
 * rgb(255, 255, 300) // returns FFFFFF
 * rgb(0,0,0) // returns 000000
 * rgb(148, 0, 211) // returns 9400D3
 */

function rgb(red, green, blue) {
    // Data process values for validity
    red = red < 0 ? 0 : red;
    green = green < 0 ? 0 : green;
    blue = blue < 0 ? 0 : blue;

    red = red > 255 ? 255 : red;
    green = green > 255 ? 255 : green;
    blue = blue > 255 ? 255 : blue;

    // Get quotients
    let redQuotient = Math.floor(red / 16);
    let greenQuotient = Math.floor(green / 16);
    let blueQuotient = Math.floor(blue / 16);

    // Get remainders
    let redRemainder = red % 16;
    let greenRemainder = green % 16;
    let blueRemainder = blue % 16;

    return hex(redQuotient) + hex(redRemainder) + hex(greenQuotient) + hex(greenRemainder) + hex(blueQuotient) + hex(blueRemainder);
}

function hex(num) {
    if (num === 10) {
        return 'A';
    } else if (num === 11) {
        return 'B';
    } else if (num === 12) {
        return 'C';
    } else if (num === 13) {
        return 'D';
    } else if (num === 14) {
        return 'E';
    } else if (num === 15) {
        return 'F';
    } else {
        return num.toString();
    }
}

// Test cases
console.log(rgb(255, 255, 255)); // returns FFFFFF
console.log(rgb(255, 255, 300)); // returns FFFFFF
console.log(rgb(0,0,0)); // returns 000000
console.log(rgb(148, 0, 211)); // returns 9400D3
