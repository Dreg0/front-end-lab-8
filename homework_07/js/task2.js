    
    var range = 5;
    var attempts = 3;
    var prize = 10;
    var currentPrize = 0;
    var usedAttempts = 0;
    var randomNumber = Math.floor(Math.random() * (range + 1));
    console.log("randomized " + randomNumber);
    var nextLevel = true;
    var play = confirm("Do you want to play a game?");


    if (play) {
        while (true && usedAttempts < 3 && nextLevel) {
            // var randomNumber = Math.floor(Math.random() * (range + 1));
            // console.log("randomized " + randomNumber);
            var playerTurn = Number(prompt(`Enter a number from 0 to ${range} \nAttempts left: ${attempts}\nYour Prize: ${currentPrize} $\nPossible prize on current attemp: ${prize}$`));
            if (playerTurn === randomNumber && playerTurn != isNaN) {
                attempts = 3;
                currentPrize = prize;
                prize *= 3;
                usedAttempts = 0;
                range *= 2;
                randomNumber = Math.floor(Math.random() * (range + 1));
                console.log("randomized " + randomNumber);
                nextLevel = confirm('Do you want to continue a game?');
            }
            else {
                attempts --;
                usedAttempts ++;
                prize = Math.floor (prize / 2 );
            }
        }

        console.log(`Thank you for a game. Your prize is: ${currentPrize}$`);
        play = confirm("Do you want to play again?");

    } else {
        console.log("You did not become a millionaire");
    }
