/* Create variables, arrays, etc.

1. Array of 5 questions x
2. Each question array has array of 4 choices x
3. Timer variable
4. Start button

*/
    
$( document ).ready(function() {
    console.log( "ready!" );
});


var questions = ["This is question 1", "Question 2", "Question 3", "Question 4", "This is question 5"]

var q1Choices = ["Q1 choice 1", "Q1 choice 2", "Q1 choice 3", "Q1 choice 4",]
var q2Choices = ["Q2 choice 1", "Q2 choice 2", "Q2 choice 3", "Q2 choice 4",]
var q3Choices = ["Q3 choice 1", "Q3 choice 2", "Q3 choice 3", "Q3 choice 4",]
var q4Choices = ["Q4 choice 1", "Q4 choice 2", "Q4 choice 3", "Q4 choice 4",]
var q5Choices = ["Q5 choice 1", "Q5 choice 2", "Q5 choice 3", "Q5 choice 4",]

var correctChoices = ["Q1 choice 1", "Q2 choice 1", "Q3 choice 1", "Q4 choice 1", 
"Q5 choice 1"]

// var correctChoices = [q1Choices[0], q2Choices[0], q3Choices[0], q4Choices[0], 
// q5Choices[0]];
console.log(correctChoices);
// console.log(correctChoices[0]);

var userGuess = [];

/* 
When user clicks "start," do the following:
	1. Remove start button
	2. Display decrementing timer
	3. Display question 1
	4. Dynamically create 4 buttons showing choice options
	5. On button click, store value of button index
	6. Stop timer
	7. Declare index of winning choice
	8. Compare index of selected button with index of correct choice
*/

// ADD TO WORKING CODE

var winningAnswer = $("<div>");
winningAnswer.addClass("test")
winningAnswer.text("You win!");

var losingAnswer = $("<div>");
losingAnswer.addClass("test")
losingAnswer.text("You lose!");

var winCounter = 0;
var lossCounter = 0;
var unanswered = 0;

// THIS IS WORKING CODE
// function play() {
// 	$("#playButton").click(function() {
// 	$(".playButton").remove();
// 	runTimer();
// 	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
// 	$("#question").text("Question 1");
// 	createButtons();
// 	compareClickValues();
//   })
// }

// play();


function play() {
	$("#startButton").on("click", function() {
	$(".startButton").remove();
	runTimer();
	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
	$("#question").text(questions[0]);
	createButtons();
	compareClickValues();
  })
}

play();

function createButtons() {
	for (var i = 0; i < q1Choices.length; i++)
	$("<button>" + q1Choices[i] + "</button>").appendTo(".choices");
}

function compareClickValues() {
	for (var i = 0; i < q1Choices.length; i++)
	$("button").eq(i).on("click", {value: i}, function(event) {
	stop ();
	var winningChoice = (correctChoices.indexOf("Q1 choice 1"));
	if ($(this).index() == winningChoice) {
		$("#question").text("Correct!");
		$(".choices").remove();
		$(".correctChoice").append(winningAnswer);
		winCounter++;
		console.log("this is win counter " + winCounter);
	} else {
		$("#question").text("Nope!");
		// add correct answer to div somewhere
		$(".choices").remove();
		$(".incorrectChoice").append(losingAnswer);
		lossCounter++;
		console.log("this is loss counter " + lossCounter);
	}
  })
}

// function displayResult () {
// 	setTimeout(function () {
// 		$(".play").hide(); }, 3000);
// 	}



// function reset () {
// 	$(".play").show(); 
// }

// function advance () {
// 	for (i = 0; i < questions.length; i++){
// 		$("#question").text(questions[i]);
// 	}
// }

// Need advance/reset function
// function resetGame () {
// 	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
// 	$("#question").text("Question 1");
// 	createButtons();
// 	compareClickValues();
// }

// Step four: Stop timer when user clicks on any "choices" button x

// Set timer to 30 seconds
var timer = 20;
// Variable to hold interval ID
var intervalID;

// The "run" function sets an interval and decrements counter by 1 per second
function runTimer() {
	intervalID = setInterval(decrement, 1000);
}
// The decrement function
function decrement () {
	timer--;
// Replace timer with this one that is counting down
	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
	if (timer === 0) {
		stop();
		console.log("Time's up!!!")
		$("#question").text("Time's up!!!");
		// add correct answer to div somewhere
		$(".choices").remove();
		$(".incorrectChoice").append(losingAnswer);
		unanswered++;
		// displayResult();
	}
}
// stop function
function stop() {
	clearInterval(intervalID);
}


// startGame();






