var name = prompt("What is your name?");
        alert("Hello " + name);

        var words = ["javascript", "monkey", "amazing", "pancake"];
        var rdmWord = words[Math.floor(Math.random() * rdmWord.length)];
        var answerArray = [];
        for (var i = 0; i < rdmWord.length; i++) {
            answerArray[i] = "_";
        }
        var remainingLetters = rdmWord.length;

        while (remainingLetters > 0) {
            alert(answerArray.join(""));
            var guess = prompt("Guess a letter, or click Cancel to stop playing.");
            if (guess === null) {
                break;
            }
            else if(guess.length !== 1) {
                alert("Please enter a single letter.");
            }
            else{ 
                for (var j = 0; j < rdmWord.length; j++) {
                if (rdmWord[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters--;
                }
            }
            }
            alert(answerArray.join(" "));
        }
        alert("Good job! The answer was " + word);