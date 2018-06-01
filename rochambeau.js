var playerChoice;
var computerChoice;

var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0, 0, 0];
var match = [0, 0];

// stores player's choice, call's function for storing computer's choice
function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + choice);
    storeComputerChoice();
}

// computer's choice
function storeComputerChoice() {
    computerChoice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computerChoice);
}

// play game
function playGame() {
    if (playerChoice == computerChoice) { // tie
        updateScore(1);
        displayGameResult("tie");
    } else if (playerChoice == 0 && (computerChoice == 2 || computerChoice == 3)) { // rock > (scissors or lizard)
        updateScore(0);
        displayGameResult("win");
    } else if (playerChoice == 1 && (computerChoice == 0 || computerChoice == 4)) { // paper > (rock or spock)
        updateScore(0);
        displayGameResult("win");
    } else if (playerChoice == 2 && (computerChoice == 1 || computerChoice == 3)) { // scissors > (paper or lizard)
        updateScore(0);
        displayGameResult("win");
    } else if (playerChoice == 3 && (computerChoice == 1 || computerChoice == 4)) { // lizard > (paper or spock)
        updateScore(0);
        displayGameResult("win");
    } else if (playerChoice == 4 && (computerChoice == 0 || computerChoice == 2)) { // spock > (rock or scissors)
        updateScore(0);
        displayGameResult("win");
    } else {
        updateScore(2);
        displayGameResult("lose");
    }

    if (score[0] == 2) {
        updateMatch(0);
        score = [0, 0, 0];
    } else if (score[2] == 2) {
        updateMatch(1);
        score = [0, 0, 0];
    }
}

// result of game
function displayGameResult(result) {
    // create message
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    // win, loss, or tie
    if (result === "win") {
        // win
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        // loss
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        // tie
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    updateScoreBoard();
}

// updates score
function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}

// updates match score
function updateMatch(a) {
    ++match[a];
    console.log("The match score is now " + match)
}

// displays score
function updateScoreBoard() {
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1];

    document.getElementById("mWins").textContent = match[0];
    document.getElementById("mLosses").textContent = match[1];
}

// button elements
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var lizardButton = document.getElementById("lizard");
var spockButton = document.getElementById("spock");
var playButton = document.getElementById("play");

// add event handlers
rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(3);
});
spockButton.addEventListener('click', () => {
    storePlayerChoice(4);
});
playButton.addEventListener('click', () => {
    playGame()
});
