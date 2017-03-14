$( document ).ready(function() {
});

// Here are all the lengthy quotes and choices.
var questions = [
'"One of the key problems today is that politics is such a disgrace.'
+ ' Good people don’t go into government."', 
'"A bachelor is a guy who never made the same mistake once."', 
'"Confidence is 10 percent hard work and 90 percent delusion."', 
'"There is no terror in the bang, only in the anticipation of it."', 
'"What do you want a meaning for? Life is a desire, not a meaning."'
]

var q1Choices = [
'Bill Maher',
'Donald Trump',
'Oprah Winfrey',
'Ralph Nader'
]
var q2Choices = [
'Phyllis Diller',
'Jerry Seinfeld',
'Johnny Carson',
'Wanda Sykes'
]
var q3Choices = [
'Woody Allen',
'Dolly Parton',
'Mark Twain',
'Tina Fey'
]
var q4Choices = [
'Orson Welles',
'Alfred Hitchcock', 
'M. Night Shyamalan',
'Stephen King'
]
var q5Choices = [
'Steve Jobs',
'Maya Angelou',
'Confucius',
'Charlie Chaplin'
]

// The solutions for each question, which we'll display.
var solutions = [
'The 45th president of the United States called politics "a disgrace."',
'Phyllis Diller made her debut as a stand-up comedian at age 37.', 
'The former "SNL" star who got her start at The Second City'
+ ' once called Evanston home.',
'The late "Master of Suspense" was a pioneer in the genres of'
+ ' suspense and psychological thrillers.',
'The silent film icon was best known for his character "the tramp."'
]

// IMAGE ELEMENT VARIABLES TO USE IN CODE BELOW	
var giphy = $("<img>");
giphy.attr("src", "assets/images/giphy.gif");

var winningAnswer = $("<img>");
var winningAnswer2 = $("<img>");
var winningAnswer3 = $("<img>");
var winningAnswer4 = $("<img>");
var winningAnswer5 = $("<img>");

winningAnswer.attr("src", "assets/images/Trump.jpg");
winningAnswer2.attr("src", "assets/images/Diller.jpg");
winningAnswer3.attr("src", "assets/images/TinaFey.jpg");
winningAnswer4.attr("src", "assets/images/Hitchcock.jpg");
winningAnswer5.attr("src", "assets/images/Chaplin.jpg");

// Assign counters for scores
var winCounter = 0;
var lossCounter = 0;
var unanswered = 0;

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


/* WE ARE WORKING THROUGH GAME IN ROUNDS
I wish I knew how to do this more efficiently!
*/
function roundOne() {
	startTimer();
	$("#question").text(questions[0]);
	for (var i = 0; i < q1Choices.length; i++) {
	$("<button>" + q1Choices[i] + "</button>").appendTo(".choices");
	}	
	compareClickValues();
};

// Each round will call several functions and create buttons
function roundTwo () {
	startTimer();
	$("#question").text(questions[1])
	for (var i = 0; i < q2Choices.length; i++) {
	$("<button>" + q2Choices[i] + "</button>").appendTo(".choices");
	}
	compareClickValues2();
};

// I know there's a better way to do this! 
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

// HERE IS THE CODE TO CHECK VALUES, DELIVER OUTCOMES
function compareClickValues() {
  $("button").on("click", function() {
	stop ();
	$("button").hide();
	setTimeout(roundTwo, 1000 * 3);
		// compare user choice with correct answer, run code
		if ($(this).index() == 1) {
			$("#question").text("Correct!");
			$("<p>" + solutions[0] + "</p>").appendTo("#question");
			$("#question").append(winningAnswer);
			winCounter++;
		} else {
			$("#question").text("Nope!");
			$("<p>" + solutions[0] + "</p>").appendTo("#question");
			$("#question").append(winningAnswer);
			lossCounter++;
		}
  	})
}
// We are moving through rounds here too ... too much code!!!
function compareClickValues2() {
  $("button").on("click", function() {
	stop ();
	$("button").hide();
	setTimeout(roundThree, 1000 * 3);
		if ($(this).index() == 4) {
			$("#question").text("Correct!");
			$("<p>" + solutions[1] + "</p>").appendTo("#question");
			$("#question").append(winningAnswer2);
			winCounter++;
		} else {
			$("#question").text("Nope!");
			$("<p>" + solutions[1] + "</p>").appendTo("#question");
			$("#question").append(winningAnswer2);
			lossCounter++;
		}
	})
}

// ROUND THREE
function compareClickValues3() {
  $("button").on("click", function() {
	stop ();
	$("button").hide();
	setTimeout(roundFour, 1000 * 3);
		if ($(this).index() == 11) {
			$("#question").text("Correct!");
			$("<p>" + solutions[2] + "</p>").appendTo("#question");
			$("#question").append(winningAnswer3);
			winCounter++;
		} else {
			$("#question").text("Nope!");
			$("<p>" + solutions[2] + "</p>").appendTo("#question");
			$("#question").append(winningAnswer3);
			lossCounter++;
		}
	})
}

// ROUND FOUR 
function compareClickValues4() {
  $("button").on("click", function() {
	stop ();
	$("button").hide();
	setTimeout(roundFive, 1000 * 3);
		if ($(this).index() == 13) {
			$("#question").text("Correct!");
			$("<p>" + solutions[3] + "</p>").appendTo("#question");
			$("#question").append(winningAnswer4);
			winCounter++;
		} else {
			$("#question").text("Nope!");
			$("<p>" + solutions[3] + "</p>").appendTo("#question");
			$("#question").append(winningAnswer4);
			lossCounter++;
		}
	})
}

// ROUND FIVE
function compareClickValues5() {
  $("button").on("click", function() {
	stop ();
	$("button").hide();
	setTimeout(displayScore, 1000 * 3);
		if ($(this).index() == 19) {
			$("#question").text("Correct!");
			$("<p>" + solutions[4] + "</p>").appendTo("#question");
			$("#question").append(winningAnswer5);
			winCounter++;
		} else {
			$("#question").text("Nope!");
			$("<p>" + solutions[4] + "</p>").appendTo("#question");
			$("#question").append(winningAnswer5);
			lossCounter++;
		}
	})
}

// GAME IS OVER
function displayScore () {
	$("#question").text("You made it! Here's how you did:")
	$("#wins").text("Correct answers: " + winCounter)
	$("#losses").text("Incorrect answers: " + lossCounter)
	$("#unanswered").text("Unanswered: " + unanswered)
	$("<button>" + "Start Over?" + "</button>").appendTo("#restart");
	$("button").on("click", function() {
		$("#wins").empty();
		$("#losses").empty();
		$("#unanswered").empty();
		$("#restart").empty();
		roundOne();
	})
}


// TIMER: set countdown amount
var timer = 20;
// Variable to hold interval ID
var intervalID;

// Set the clock and decrement by 1 per second
function startTimer(){
	timer = 5;
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
		$("#question").text("Time's up!!!");
		$("<p>" + solutions[0] + "</p>").appendTo("#question");
		$("#question").append(winningAnswer);
		unanswered++;
		setTimeout(roundTwo, 1000 * 3);
	}
}

// The stop timer function
function stop() {
	clearInterval(intervalID);
}
// Adding in button hover elements
$("button").hover(function(){
    $(this).css("background-color", "#18c8e4");
    }, function(){
    $(this).css("background-color", "white");
 });

 // And some fun link hover decoration
$("a").hover(function(){
    $(this).css("background-color", "#18c8e4");
     }, function(){
    $(this).css("background-color", "white");
 });




