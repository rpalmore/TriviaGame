$( document ).ready(function() {
	console.log( "ready!" );
});

var questions = ["This is question 1", "Question 2", "Question 3", "Question 4", "This is question 5"]

var q1Choices = ["Q1 choice 1", "Q1 choice 2", "Q1 choice 3", "Q1 choice 4",]
var q2Choices = ["Q2 choice 1", "Q2 choice 2", "Q2 choice 3", "Q2 choice 4",]
var q3Choices = ["Q3 choice 1", "Q3 choice 2", "Q3 choice 3", "Q3 choice 4",]
var q4Choices = ["Q4 choice 1", "Q4 choice 2", "Q4 choice 3", "Q4 choice 4",]
var q5Choices = ["Q5 choice 1", "Q5 choice 2", "Q5 choice 3", "Q5 choice 4",]

var solutions = ["The correct answer was: Q1 choice 1", "In fact, Q2 choice 1", "In fact, Q3 choice 1",
"In fact, Q4 choice 1", "In fact, Q5 choice 1"]

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

var winningAnswer = $("<img>");
winningAnswer.attr("src", "assets/images/Trump.jpg");


var winCounter = 0;
var lossCounter = 0;
var unanswered = 0;

function start() {
	$("#startButton").on("click", function() {
	$(".startButton").remove();
	roundOne();
  })
}
start();

function roundOne() {
	startTimer();
	$("#question").text(questions[0]);
	for (var i = 0; i < q1Choices.length; i++) {
	$("<button>" + q1Choices[i] + "</button>").appendTo(".choices");
	}
	compareClickValues();
};

function roundTwo () {
	startTimer();
	$("#question").text(questions[1])
	for (var i = 0; i < q2Choices.length; i++) {
	$("<button>" + q2Choices[i] + "</button>").appendTo(".choices");
	}
	compareClickValues2();
};

function roundThree () {
	startTimer();
	$("#question").text(questions[2])
	for (var i = 0; i < q3Choices.length; i++) {
	$("<button>" + q3Choices[i] + "</button>").appendTo(".choices");
	}
	compareClickValues3();
};

function roundFour () {
	startTimer();
	$("#question").text(questions[3])
	for (var i = 0; i < q4Choices.length; i++) {
	$("<button>" + q4Choices[i] + "</button>").appendTo(".choices");
	}
	compareClickValues4();
};

function roundFive () {
	startTimer();
	$("#question").text(questions[4])
	for (var i = 0; i < q4Choices.length; i++) {
	$("<button>" + q5Choices[i] + "</button>").appendTo(".choices");
	}
	compareClickValues5();
};

function displayScore () {
	// startTimer();
	// $("#question").text(questions[4])
	// for (var i = 0; i < q4Choices.length; i++) {
	// $("<button>" + q5Choices[i] + "</button>").appendTo(".choices");
	// }
	// compareClickValues5();
};
// TRY AND WRITE ONE FUNCTION FOR ALL OF THIS
function compareClickValues() {
$("button").on("click", function() {
	stop ();
	if ($(this).index() == 0) {
		$("#question").text("Correct!");
		$("button").hide();
		$("#question").append(winningAnswer);
		winCounter++;
		setTimeout(roundTwo, 1000 * 3);
	} else {
		$("#question").text("Nope!");
		$("button").hide();
		$("<p>" + solutions[1] + "</p>").appendTo("#question");
		$("#question").append(winningAnswer);
		lossCounter++;
		setTimeout(roundTwo, 1000 * 3);
	}
  })
}

// NEW WORKING CODE
function compareClickValues2() {
$("button").on("click", function() {
	stop ();
	if ($(this).index() == 4) {
		$("#question").text("Correct!");
		$("button").hide();
		$("#question").append(winningAnswer);
		winCounter++;
		setTimeout(roundThree, 1000 * 3);
	} else {
		$("#question").text("Nope!");
		$("button").hide();
		$("<p>" + solutions[1] + "</p>").appendTo("#question");
		$("#question").append(winningAnswer);
		lossCounter++;
		setTimeout(roundThree, 1000 * 3);
	}
  })
}

// NEW WORKING CODE
function compareClickValues3() {
$("button").on("click", function() {
	stop ();
	if ($(this).index() == 8) {
		$("#question").text("Correct!");
		$("button").hide();
		$("#question").append(winningAnswer);
		winCounter++;
		setTimeout(roundFour, 1000 * 3);
	} else {
		$("#question").text("Nope!");
		$("button").hide();
		$("<p>" + solutions[2] + "</p>").appendTo("#question");
		$("#question").append(winningAnswer);
		lossCounter++;
		setTimeout(roundFour, 1000 * 3);
	}
  })
}

function compareClickValues4() {
$("button").on("click", function() {
	stop ();
	if ($(this).index() == 12) {
		$("#question").text("Correct!");
		$("button").hide();
		$("#question").append(winningAnswer);
		winCounter++;
		setTimeout(roundFive, 1000 * 3);
	} else {
		$("#question").text("Nope!");
		$("button").hide();
		$("<p>" + solutions[3] + "</p>").appendTo("#question");
		$("#question").append(winningAnswer);
		lossCounter++;
		setTimeout(roundFive, 1000 * 3);
	}
  })
}

function compareClickValues5() {
$("button").on("click", function() {
	stop ();
	if ($(this).index() == 16) {
		$("#question").text("Correct!");
		$("button").hide();
		$("#question").append(winningAnswer);
		winCounter++;
		setTimeout(roundFour, 1000 * 3);
	} else {
		$("#question").text("Nope!");
		$("button").hide();
		$("<p>" + solutions[4] + "</p>").appendTo("#question");
		$("#question").append(winningAnswer);
		lossCounter++;
		setTimeout(displayScore, 1000 * 3);
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
	timer = 10;
	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
	intervalID = setInterval(decrement, 1000);
}

// WORKING CODE DO NOT EDIT
// Decrement function
function decrement() {
	timer--;

// Replace timer with this one that is counting down
	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
	if (timer === 0) {
		stop();
		$("#question").text("Time's up!!!");
		$("button").hide();
		$("<p>" + solutions[0] + "</p>").appendTo("#question");
		$("#question").append(winningAnswer);
		unanswered++;
		setTimeout(roundTwo, 1000 * 3);
	}
}
// END WORKING CODE BLOCK

// The stop timer function
function stop() {
	clearInterval(intervalID);
}






