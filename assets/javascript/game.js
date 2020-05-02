//// Step 0. Initialize variables:

var wins = 0;
var losses = 0;
var totalScoreToGet = 0;
var totalClickedNum = 0;
var blueGemAmount = 0;
var greenGemAmount = 0;
var yellowGemAmount = 0;
var redGemAmount = 0;
var randomNumGenerated = 0;

function startGame(){
    blueGemAmount = Math.floor(Math.random()* 15)+ 1;
    redGemAmount = Math.floor(Math.random()* 15)+ 1;
    greenGemAmount = Math.floor(Math.random()* 15)+ 1;
    yellowGemAmount = Math.floor(Math.random()* 15)+ 1;
    randomNumGenerated = Math.floor(Math.random()* 101) + 19;
    totalClickedNum = 0;
    $("#randomnumber").text("Score to get: " + randomNumGenerated);
    $("#tscore").text(totalClickedNum);
}
startGame();
// Step 1. Get a random number generated for the number you are trying to get to
// look up how to generate a random number

// Step 10. When each gem is clicked add that number to the totalClickedNum
// Step 2. Display the random number generated

// Step 9. Assign a random number to each of the gems
// Step 10. When each gem is clicked add that number to the totalClickedNum
function blueGem(){
$("#bluegem").click(function(){
// Step 7. Calculate total score
    totalClickedNum += blueGemAmount;
// Step 8. Display total score
    $("#tscore").text(totalClickedNum);
    checkWin();
})
}
blueGem()

function greenGem(){
    $("#greengem").click(function(){
        totalClickedNum += greenGemAmount;
        $("#tscore").text(totalClickedNum);
        checkWin();
    })
}
greenGem();

function redGem(){
    $("#redgem").click(function(){
        console.log(redGemAmount);
        totalClickedNum += redGemAmount;
        $("#tscore").text(totalClickedNum);
        checkWin();
    })
}
redGem();

function yellowGem(){
    $("#yellowgem").click(function(){
        console.log(yellowGemAmount);
        totalClickedNum += yellowGemAmount;
        $("#tscore").text(totalClickedNum);
        checkWin();
    })
}
yellowGem();

// Step 3. Calculate wins
function checkWin(){
    if(randomNumGenerated === totalClickedNum){
        wins++
// Step 4. Display wins
        $("#wins").text("Wins: " + wins);
        startGame();
    }
    else if(totalClickedNum > randomNumGenerated){
// Step 5. Calculate losses
        losses++
        startGame();
// Step 6. Display losses
        $("#losses").text("Losses: " + losses);
    }
}



