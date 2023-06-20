/*
 * You will be given an array a and a value x.
 * All you need to do is check whether the provided array contains the value.
 * Array can contain numbers or strings. X can be either.
 * Return true if the array contains the value, false if not.
 */

function isValueInArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (element === target) {
            return true;
        }
    }

    return false;
}

// Test cases
console.log(isValueInArray([66, 101], 66));                          // true
console.log(isValueInArray([101, 45, 75, 105, 99, 107], 107));       // true
console.log(isValueInArray(['t', 'e', 's', 't'], 'e'));              // true
console.log(isValueInArray(['what', 'a', 'great', 'kata'], 'kat'));  // false
