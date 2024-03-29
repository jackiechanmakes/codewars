/*
 * Messi goals function
 * Messi is a soccer player with goals in three leagues:
 *
 * LaLiga
 * Copa del Rey
 * Champions
 *
 * Complete the function to return his total number of goals in all three leagues.
 * Note: the input will always be valid.
 *
 * For example:
 * 5, 10, 2  -->  17
 */

/* Solutions #2 - more descriptive variable naming */
function goals(laligaGoals, copadelreyGoals, championsGoals) {
    return laligaGoals + copadelreyGoals + championsGoals;
}

/* Solution #1 */
// function goals(goals1, goals2, goals3) {
//     return goals1 + goals2 + goals3;
// }

// Test cases
console.log(goals(0,0,0));       // 0
console.log(goals(43, 10, 5));   // 58
