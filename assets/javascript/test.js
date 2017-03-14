console.log("Hey there!");


var trivia = [
{ question1: "question1",
  answerA1: "answer1",
  optionA1: "correct1", 
  optionA2: "answerA2", 
  optionA3: "answerA3" ,
  image1: "image1" },

{ question2: "question2", 
  answer2: "answer2", 
  optionB1: "correct2", 
  optionB2: "answerB2", 
  optionB3: "answerB3",
  image2: "image2" },

{ question3: "question2", 
  answer3: "answer3", 
  optionC1: "correct3", 
  optionC2: "answerC1", 
  optionC3: "answerC2",
  image3: "image3" }
];

question1 = '"One of the key problems today is that politics is such a disgrace.'
+ ' Good people don’t go into government."';

correct1 = 'Donald Trump';

image1 = "assets/images/Trump.jpg";

// START FUNCTION
function start() {
 	winCounter = 0;
	lossCounter = 0;
	unanswered = 0;
	$("#giphy").prepend(giphy);
	$("#startButton").on("click", function() {
	$(".startButton").remove();
	$("#giphy").remove();
	roundOne();
  })
}
start();

function roundOne() {
	startTimer();
	$("#question").text(question1);
	$("<button>" + trivia.optionA1 + "</button>").appendTo(".choices");
	$("<button>" + optionA2 + "</button>").appendTo(".choices");
	$("<button>" + optionA3 + "</button>").appendTo(".choices");

 	$("button").on("click", function() {
	stop ();
	$("button").hide();
		if ($(this) == correct) {
			$("#question").text("Correct!");
			$("<p>" + answer + "</p>").appendTo("#question");
			$("#question").append(image);
			winCounter++;
		} else {
			$("#question").text("Nope!");
			$("<p>" + answer + "</p>").appendTo("#question");
			$("#question").append(image);
			lossCounter++;
		}
  	})
}

// TIMER: set countdown amount
var timer = 20;
// Variable to hold interval ID
var intervalID;

// Set the clock and decrement by 1 per second
function startTimer(){
	timer = 30;
	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
	intervalID = setInterval(decrement, 1000);
}

// Decrement function
function decrement() {
	timer--;
	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
	if (timer === 0) {
		stop();
		$("button").hide();
		unanswered++;
		$("#question").text("Time's up!!!");
		$("<p>" + solutions[0] + "</p>").appendTo("#question");
		$("#question").append(winningAnswer);
		unanswered++;
		setTimeout(roundTwo, 1000 * 3);
}
}