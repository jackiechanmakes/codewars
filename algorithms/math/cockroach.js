/*
 * The cockroach is one of the fastest insects. Write a function which takes its speed in
 * km per hour and returns it in cm per second, rounded down to the integer (= floored).
 *
 * For example:
 * 1.08 --> 30
 * Note! The input is a Real number (actual type is language dependent) and is >= 0.
 * The result should be an Integer.
 */

/* Solution #2 */
function cockroachSpeed(speedKmPerHour) {
    let secsInHour = 1 * 60 * 60;
    let cmInKm = 1 * 1000 * 100;
    return Math.floor(speedKmPerHour / secsInHour * cmInKm);
}

/* Solution #1 */
// function cockroachSpeed(speedKmPerHour) {
//     return Math.floor(speedKmPerHour / (60 * 60) * 100000);

// }

// Test cases
console.log(cockroachSpeed(1.08));  // 30
console.log(cockroachSpeed(1.09));  // 30
console.log(cockroachSpeed(0));     // 0
