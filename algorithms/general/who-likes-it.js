/*
 * You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
 * pictures or other items. We want to create the text that should be displayed next to such an item.
 *
 * Implement the function which takes an array containing the names of people that like an item.
 * It must return the display text as shown in the examples:
 *
 * []                                -->  "no one likes this"
 * ["Peter"]                         -->  "Peter likes this"
 * ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
 * ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
 * ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 * Note: For 4 or more names, the number in "and 2 others" simply increases.
 */

/* Alternate Solution #2 - using switch statement */
// function likes(names) {
//     switch (names.length) {
//         case 0:
//             return `no one likes this`;
//             break;
//         case 1:
//             return `${names[0]} likes this`;
//             break;
//         case 2:
//             return `${names[0]} and ${names[1]} like this`;
//             break;
//         case 3:
//             return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//             break;
//         default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//             break;
//     }
// }

/* Alternate Solution #1 - using property accessors */
function likes(names) {
    return {
        0: `no one likes this`,
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }[Math.min(names.length, 4)];
}

/* Initial Solution - other solutions above are better because of
conciseness and logic */
// function likes(people) {
//     let numPeople = people.length;
//     if (numPeople === 0) {
//         return `no one likes this`;
//     } else if (numPeople === 1) {
//         return `${people[0]} likes this`;
//     } else if (numPeople === 2) {
//         return `${people[0]} and ${people[1]} like this`
//     } else if (numPeople === 3) {
//         return `${people[0]}, ${people[1]} and ${people[2]} like this`
//     } else if (numPeople >= 4) {
//         return `${people[0]}, ${people[1]} and ${numPeople - 2} others like this`
//     }
// }

// Test cases
console.log(likes([]));                                // 'no one likes this'
console.log(likes(['Peter']));                         // 'Peter likes this'
console.log(likes(['Jacob', 'Alex']))                  // 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark']));           // 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));  // 'Alex, Jacob and 2 others like this'
