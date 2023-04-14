/* Introduction
 * The first century spans from the year 1 up to and including the year 100, the second century -
 * from the year 101 up to and including the year 200, etc.
 *
 * Task
 * Given a year, return the century it is in.
 * Examples
 * 1705 --> 18
 * 1900 --> 19
 * 1601 --> 17
 * 2000 --> 20
 *
 * Note: this kata uses strict construction as shown in the description and the examples,
 * you can read more about it at: https://en.wikipedia.org/wiki/Century
 */

function getCentury(year) {
    if (year % 100 === 0) {
        return year / 100;
    }

    return Math.floor(year / 100) + 1;
}

// Test cases
console.log(getCentury(1705)); // 18
console.log(getCentury(1900)); // 19
console.log(getCentury(1601)); // 17
