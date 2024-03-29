/*
 * Let's play! You have to return which player won! In case of a draw return Draw!.
 *
 * Examples(Input1, Input2 --> Output):
 *
 * "scissors", "paper" --> "Player 1 won!"
 * "scissors", "rock" --> "Player 2 won!"
 * "paper", "paper" --> "Draw!"
 */

function rps(player1, player2) {
    let map = {
        'rock' : 'scissors',
        'scissors' : 'paper',
        'paper' : 'rock'
    };

    if (player1 === player2) {
        return "Draw!";
    } else {
        return `Player ${map[player1] === player2 ? 1 : 2} won!`
    }
}

// Test cases

console.log(rps('rock', 'scissors'));      // "Player 1 won!"
console.log(rps('scissors', 'paper'));     // "Player 1 won!"
console.log(rps('paper', 'rock'));         // "Player 1 won!"
console.log(rps('scissors', 'rock'));      // "Player 2 won!"
console.log(rps('paper', 'scissors'));     // "Player 2 won!"
console.log(rps('rock', 'paper'));         // "Player 2 won!"
console.log(rps('rock', 'rock'));          // "Draw!"
console.log(rps('scissors', 'scissors'));  // "Draw!"
console.log(rps('paper', 'paper'));        // "Draw!"
