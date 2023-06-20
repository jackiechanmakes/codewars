/* Create a function which answers the question "Are you playing banjo?".
* If your name starts with the letter "R" or lower case "r", you are playing banjo!
*
* The function takes a name as its only argument, and returns one of the following strings:
*
* name + " plays banjo"
* name + " does not play banjo"
* Names given are always valid strings.
*/


function areYouPlayingBanjo(name) {
    let result = "";
    let firstChar = name[0];

    if (firstChar === 'R' || firstChar === 'r') {
        result += name + " plays banjo";
    } else {
        result += name + " does not play banjo";
    }

    return result;
}

// Test cases

console.log(areYouPlayingBanjo("Jackie")); // Jackie does not play banjo
console.log(areYouPlayingBanjo("Rocky"));  // Rocky plays banjo
console.log(areYouPlayingBanjo("Adam"));   // "Adam does not play banjo"
console.log(areYouPlayingBanjo("Paul"));   // "Paul does not play banjo"
console.log(areYouPlayingBanjo("Ringo"));  // "Ringo plays banjo"
console.log(areYouPlayingBanjo("bravo"));  // "bravo does not play banjo"
console.log(areYouPlayingBanjo("rolf"));   // "rolf plays banjo"
