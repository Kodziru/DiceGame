var scores, roundScore, activePlayer, dice, game;

init();

var lastDice;

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (game) {
        //The random value of dice ↓
        var randomNumber = Math.floor(Math.random() * 6) + 1;

        //Show dice box
        document.getElementById("diceBox").style.display = "block";

        if (randomNumber !== 1) {
            //add score
            roundScore += randomNumber;
            document.querySelector("#current-" + activePlayer).textContent =
                roundScore;
        } else {
            //next player
            nextPlayer();
        }

        //Show value of dice
        if (randomNumber === 1) {
            document.getElementById("oneDot").style.display = "grid";
            document.getElementById("twoDot").style.display = "none";
            document.getElementById("threeDot").style.display = "none";
            document.getElementById("fourDot").style.display = "none";
            document.getElementById("fiveDot").style.display = "none";
            document.getElementById("sixDot").style.display = "none";
        } else if (randomNumber === 2) {
            document.getElementById("oneDot").style.display = "none";
            document.getElementById("twoDot").style.display = "grid";
            document.getElementById("threeDot").style.display = "none";
            document.getElementById("fourDot").style.display = "none";
            document.getElementById("fiveDot").style.display = "none";
            document.getElementById("sixDot").style.display = "none";
        } else if (randomNumber === 3) {
            document.getElementById("oneDot").style.display = "none";
            document.getElementById("twoDot").style.display = "none";
            document.getElementById("threeDot").style.display = "grid";
            document.getElementById("fourDot").style.display = "none";
            document.getElementById("fiveDot").style.display = "none";
            document.getElementById("sixDot").style.display = "none";
        } else if (randomNumber === 4) {
            document.getElementById("oneDot").style.display = "none";
            document.getElementById("twoDot").style.display = "none";
            document.getElementById("threeDot").style.display = "none";
            document.getElementById("fourDot").style.display = "grid";
            document.getElementById("fiveDot").style.display = "none";
            document.getElementById("sixDot").style.display = "none";
        } else if (randomNumber === 5) {
            document.getElementById("oneDot").style.display = "none";
            document.getElementById("twoDot").style.display = "none";
            document.getElementById("threeDot").style.display = "none";
            document.getElementById("fourDot").style.display = "none";
            document.getElementById("fiveDot").style.display = "grid";
            document.getElementById("sixDot").style.display = "none";
        } else if (randomNumber === 6) {
            document.getElementById("oneDot").style.display = "none";
            document.getElementById("twoDot").style.display = "none";
            document.getElementById("threeDot").style.display = "none";
            document.getElementById("fourDot").style.display = "none";
            document.getElementById("fiveDot").style.display = "none";
            document.getElementById("sixDot").style.display = "grid";
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
    if (game) {
        //add current score to the global score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector("#score-" + activePlayer).textContent =
            scores[activePlayer];

        var input = document.querySelector(".final__score").value;
        var winningScore;

        //undefined,0,null or '' are coerced to false,anything else is coerced to true
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // check if player win the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector("#name-" + activePlayer).textContent =
                "Winner!";
            document.getElementById("diceBox").style.display = "none";
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.add("winner");
            document
                .querySelector(".player-" + activePlayer + "-panel")
                .classList.remove("active");
            game = false;
        } else {
            //next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //next player
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    document.getElementById("diceBox").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    game = true;

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.getElementById("diceBox").style.display = "none";
}
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';
//var x = document.querySelector('#score-0').textContent;
