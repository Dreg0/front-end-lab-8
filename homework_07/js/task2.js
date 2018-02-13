    window.onload = function () {
        var play = confirm("Do you want to play a game?");
        while (play) {
            var range = 5;
            var attempt = 3;
            var prize = 10;
            var currentPrize = 0;
            var usedAttempt = 0;
            var randomNumber = Math.floor(Math.random() * (range + 1));
            var randomNumber = 0;
            console.log(`randomized  ${randomNumber}`); //not commenting for check
            var nextLevel = true;
            var playAgain = 0;
            while (usedAttempt < 3 && nextLevel) {
                var playerTurn = (prompt(`Enter a number from 0 to ${range} \nAttempt left: ${attempt}\nYour Prize: ${currentPrize} $\nPossible prize on current attemp: ${prize}$`));
                    // parsing prompt to chek if where's any number to avoid bug with empty field and random number  0
                if (Number(playerTurn) === randomNumber && !isNaN (parseFloat(playerTurn)) ) {
                    attempt = 3;
                    currentPrize = prize;
                    prize *= 3;
                    usedAttempt = 0;
                    range *= 2;
                    randomNumber = Math.floor(Math.random() * (range + 1));
                    console.log(`randomized  ${randomNumber}`);  //not commenting for check
                    nextLevel = confirm('Do you want to continue a game?');
                } else {
                    attempt = attempt - 1;
                    usedAttempt = usedAttempt + 1;
                    prize = Math.floor(prize / 2);
                }
            }
            console.log (`Thank you for a game. Your prize is: ${currentPrize}$`);
            play = confirm ("Do you want to play again?");
            playAgain++;
        }
        if (!playAgain) {
            console.log ("You did not become a millionaire");
        }
    };