console.log("I am working!");
// the dice
const die1 = document.querySelector("#die1");
const die2 = document.querySelector("#die2");
// the buttons
const startBtn = document.querySelector("#start-btn");
const rollBtn = document.querySelector("#roll-btn");

// the inputs
const p1NameInput = document.querySelector("#p1-name-input");
const p2NameInput = document.querySelector("#p2-name-input");

// variables that will change during the game
let playerTurn = 1;      // keep track of who's turn it is
let gameRound = 1;       // keep track of what round we are on
let die1Number = 0;      // the number on die1
let die2Number = 0;      // the number on die2
let diceSum = 0;         // the sum of both dice
let p1TotalPts = 0;      // player 1's total points
let p2TotalPts = 0;      // player 2's total points
let roundPoints = 45;    // the points available on a given turn
let p1Name = "Player 1"; // name of Player 1
let p2Name = "Player 2"; // name of Player 1

// Event Listeners
startBtn.addEventListener("click", function(){
    // get the players names
    p1Name = p1NameInput.value.trim();
    p2Name = p2NameInput.value.trim();
    // check for empty names
    if(p1Name === "" || p2Name === ""){
        alert("Please Enter a name for BOTH players!");
        p1NameInput.focus();
    }else{
        // filled out both names
        // replace player1's name for the turn
        document.querySelector("#current-player-h3").textContent = `${p1Name}'s turn`;
        // todo replace player2's name and the rest of player1 (scorecard)

        // enable the roll button
        rollBtn.disabled = false;

        // hide the players and winner sections
        document.querySelector(".players").style.display = "none";
        document.querySelector(".winner").style.display = "none";
    }
    //console.log(p1Name, p2Name);
});
// *************** End of Start Button ***************

// Roll Button
rollBtn.addEventListener("click", function(){
    // generate the random dice numbers
    die1Number = rollDice();
    die2Number = rollDice();
    diceSum = die1Number + die2Number;

    // update the icons with the new numbers
    die1.className = `bi bi-dice-${die1Number}`;
    die2.className = `bi bi-dice-${die2Number}`;
    document.querySelector("#sum-of-dice").textContent = `Sum: ${diceSum}`;

});
// *************** End of Roll Button ***************


// this function will generate a random number between 1 and 6
function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}
// *************** End of rollDice() ***************







