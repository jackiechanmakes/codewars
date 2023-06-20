/*
 * Grade book
 * Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
 *
 * Numerical Score	Letter Grade
 * 90 <= score <= 100	'A'
 * 80 <= score < 90	'B'
 * 70 <= score < 80	'C'
 * 60 <= score < 70	'D'
 * 0 <= score < 60	'F'
 *
 * Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
 */

function getGrade(grade1, grade2, grade3) {
    let sum = grade1 + grade2 + grade3;
    let avg = sum / 3;
    let grade;

    if (90 <= avg && avg <= 100 ) {
        grade = 'A';
    } else if (80 <= avg && avg < 90) {
        grade = 'B';
    } else if (70 <= avg && avg < 80) {
        grade = 'C';
    } else if (60 <= avg && avg < 70) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return grade;
}

// Test cases
console.log(getGrade(95,90,93)); // 'A'
console.log(getGrade(100,85,96)); // 'A'
console.log(getGrade(92,93,94)); // 'A'
