/*
 * Given an array (arr) as an argument, complete the function countSmileys
 * that should return the total number of smiling faces.
 *
 * Rules for a smiling face:
 * Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
 * A smiley face can have a nose but it does not have to.
 * Valid characters for a nose are - or ~
 * Every smiling face must have a smiling mouth that should be marked
 * with either ) or D
 * No additional characters are allowed except for those mentioned.
 *
 * Valid smiley face examples: :) :D ;-D :~)
 * Invalid smiley faces: ;( :> :} :]
 *
 * Example:
 * countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
 * countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
 * countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
 *
 * Note:
 * In case of an empty array return 0.
 * You will not be tested with invalid input (input will always be an array).
 * Order of the face (eyes, nose, mouth) elements will always be the same.
 */

function countSmileys(arr) {
    return arr.reduce(
        function(accu, curr) {
            if (!(curr.length === 2 || curr.length === 3)) {
                return accu;
            } else {
                let eyes = curr[0];
                let mouth = curr[curr.length - 1];
                let nose;

                if (curr.length === 3) {
                    nose = curr[1];
                }

                return !(eyes === ':' || eyes === ';')
                ? accu : !(nose === undefined || nose === '-' || nose === '~')
                ? accu : !(mouth === ')' || mouth === 'D')
                ? accu : accu + 1;
            }
        }
    , 0);
}

// Test cases
console.log(countSmileys([]                             ));  // 0
console.log(countSmileys([':D',':~)',';~D',':)']        ));  // 4
console.log(countSmileys([':)',':(',':D',':O',':;']     ));  // 2
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));  // 1
