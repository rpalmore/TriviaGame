$( document ).ready(function() {
	console.log( "ready!" );
});


var questions = ["This is question 1", "Question 2", "Question 3", "Question 4", "This is question 5"]
// for (var i = 0; i < questions.length; i++) {
// 	console.log(questions[i]);
// }

var q1Choices = ["Q1 choice 1", "Q1 choice 2", "Q1 choice 3", "Q1 choice 4",]
var q2Choices = ["Q2 choice 1", "Q2 choice 2", "Q2 choice 3", "Q2 choice 4",]
var q3Choices = ["Q3 choice 1", "Q3 choice 2", "Q3 choice 3", "Q3 choice 4",]
var q4Choices = ["Q4 choice 1", "Q4 choice 2", "Q4 choice 3", "Q4 choice 4",]
var q5Choices = ["Q5 choice 1", "Q5 choice 2", "Q5 choice 3", "Q5 choice 4",]

var correctChoices = ["Q1 choice 1", "Q2 choice 1", "Q3 choice 1", "Q4 choice 1", 
"Q5 choice 1"]

var solutions = ["In fact, Q1 choice 1", "In fact, Q2 choice 1", "In fact, Q3 choice 1",
"In fact, Q4 choice 1", "In fact, Q5 choice 1"]

console.log(correctChoices);

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
winningAnswer.addClass("test");
winningAnswer.text("This will be winning image");

// var losingAnswer = $("<div>");
// losingAnswer.addClass("test");
// losingAnswer.text("This will be winning image");

var winCounter = 0;
var lossCounter = 0;
var unanswered = 0;

function start() {
	$("#startButton").on("click", function() {
	$(".startButton").remove();
	play();
  })
}

start();

function play() {
	startTimer();
	revealQuestion();
	createButtons1(); // Can I do a for loop here?
	compareClickValues(); 
	console.log("reset");
}

for (i = 0; i<questions.length; i++) {
function revealQuestion() {
	$("#question").text(questions[0]);
	}
}

function createButtons1() {
	for (var i = 0; i < q1Choices.length; i++)
	$("<button>" + q1Choices[i] + "</button>").appendTo(".choices");
}

function createButtons2() {
	for (var i = 0; i < q2Choices.length; i++)
	$("<button>" + q2Choices[i] + "</button>").appendTo(".choices");
}

function createButtons3() {
	for (var i = 0; i < q3Choices.length; i++)
	$("<button>" + q3Choices[i] + "</button>").appendTo(".choices");
}

function createButtons4() {
	for (var i = 0; i < q4Choices.length; i++)
	$("<button>" + q4Choices[i] + "</button>").appendTo(".choices");
}

function compareClickValues() {
	for (var i = 0; i < q1Choices.length; i++)
	$("button").eq(i).on("click", {value: i}, function(event) {
	console.log("I've been clicked!");
	stop ();
	var winningChoice = (correctChoices.indexOf("Q1 choice 1"));

	if ($(this).index() == winningChoice) {
		$("#question").text("Correct!");
		$("button").hide();
		$("#question").append(winningAnswer);
		winCounter++;
		console.log("this is win counter " + winCounter);
		setTimeout(play, 1000 * 3);

	} else {
		$("#question").text("Nope!");
		$("button").hide();
		$("<p>" + solutions[0] + "</p>").appendTo("#question");
		$("#question").append(winningAnswer);
		lossCounter++;
		console.log("this is loss counter " + lossCounter);
		setTimeout(play, 1000 * 3);
	}
  })
}


// Step four: Stop timer when user clicks on any "choices" button x

// Set timer to 30 seconds
var timer = 20;
// Variable to hold interval ID
var intervalID;

// The start function sets the clock and decrements by 1 per second
function startTimer(){
	timer = 5;
	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
	intervalID = setInterval(decrement, 1000);
}

// Decrement function
function decrement() {
	timer--;

// Replace timer with this one that is counting down
	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
	if (timer === 0) {
		stop();
		console.log("Time's up!!!")
		$("#question").text("Time's up!!!");
		$("button").hide();
		$("<p>" + solutions[0] + "</p>").appendTo("#question");
		$("#question").append(winningAnswer);
		unanswered++;
		setTimeout(play, 1000 * 3);
	}
}
// The stop timer function
function stop() {
	clearInterval(intervalID);
}






