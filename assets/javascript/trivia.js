$(document).ready(function() {});

// Create an object to hold questions, answers, and correct answers

/*
From what I can tell, the source of your problems is the way you defined your data, particularly the questions and their possible answers. You opted to use a separate array variable to store the answers for each question. This approach is a recipe for pain, since it immediately forces you to duplicate your code. (After all, you can iterate through the indices in an array, but there is no way to iterate through the variables in a scope!) Any time that you find yourself creating numbered variables (e.g. q1Choices, q2Choices, q3Choices, etc.), you should consider using an array instead.

The other decision that led you astray was that you did not provide yourself an easy way to determine whether the user selected the correct answer once he/she clicks on one of the choices. You used the index() method to determine the position of the clicked choice in the DOM, and you compared that index against the correct index in the original choices array. This approach is brittle, because it depends on a particular DOM structure (which will change as your JavaScript manipulates the rest of the page!). A much better approach is to maintain a reference to the DOM element for the correct choice in a separate variable (e.g. correctAnswer). Then in your click handler, you can simply compare the clicked element to this correct element to determine if the user made the right choice (e.g. if (this === correctAnswer) ...). Whenever you find yourself using index() like this, STOP -- use a variable to maintain a reference to the desired element instead! 
*/

var round1 = {
    question: '"One of the key problems today is that politics is such a disgrace.' + ' Good people don’t go into government."',
    choices: ["a", "b", "c", "donald trump"],
    answer: 3,
    solution: 'The 45th president of the United States called politics "a disgrace."',
    image: "assets/images/Trump.jpg",
}

var round2 = {
    question: '"A bachelor is a guy who never made the same mistake once."',
    answer: 1,
    choices: ["a", "phyllis diller", "c", "d"],
    solution: 'Phyllis Diller made her debut as a stand-up comedian at age 37.',
    image: "assets/images/Diller.jpg"
}

// var questions = [
// '"One of the key problems today is that politics is such a disgrace.'
// + ' Good people don’t go into government."', 
// '"A bachelor is a guy who never made the same mistake once."', 
// ]

// var choices = [ ['Donald Trump', 'x', 'y', 'z'], ['Phyllis Diller', 'a', 'b', 'c'] ]

// // You can refer to a nested index by using square brackets next to eachother
// choices[0][0] //this refers to "Donald Trump"

// var correctAnswer = [ 'Donald Trump', 'Phyllis Diller']

// var solutions = [ 'The 45th president of the United States called politics "a disgrace."', 'Phyllis Diller made her debut as a stand-up comedian at age 37.']

// var images = ["assets/images/Trump.jpg", "assets/images/Diller.jpg"]



// IMAGE ELEMENT VARIABLES TO USE IN CODE BELOW	
var giphy = $("<img>");
giphy.attr("src", "assets/images/giphy.gif");


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
        playGame();
    })
}
start();

function playGame() {
    startTimer();
    $("#question").text(round1.question);
    for (var i = 0; i < round1.choices.length; i++) {
        $("<button>" + round1.choices[i] + "</button>").appendTo(".choices");
    }
}


function compareClickValues() {
    $("button").on("click", function() {
        stop();
        $("button").hide();
        // setTimeout(roundTwo, 1000 * 3);
        // setTimeout(playGame, 1000 * 3);
        if ($("this").index() === 3) {
            $("#question").text("Correct!");
            winCounter++;
            $("<p>" + solutions[0] + "</p>").appendTo("#question");
            $("#question").append(winningAnswer);
        } else {
            $("#question").text("Nope!");
            lossCounter++;
            $("<p>" + solutions[0] + "</p>").appendTo("#question");
            $("#question").append(winningAnswer);
        }
    })
}

// function playGame() {
// 	startTimer();
// 		var i = 0;
// 		$("#question").text(questions[i]);
// 		for (var i = 0; i < choices[0].length; i++) {
// 			$("<button>" + choices[0][i] + "</button>").appendTo(".choices");
// 			console.log($("button"));
// 				if ($("button").index() === 0) {
// 					($("button").addClass("correct"));
// 			}
// 			// Check the index of button add class to that button
// 			// Ethan says to add the class to i, rather than to a particular index,
// 			// so that you can iterate through.
// 			// there is a jQuery function (method?) to check the class; I will have
// 			// to use "this" also.
// 			// check this out: https://api.jquery.com/hasclass/
// 			compareClickValues();
// 		}
// }

// function compareClickValues() {
//   $("button").on("click", function() {
// 	stop ();
// 	$("button").hide();
// 	// setTimeout(roundTwo, 1000 * 3);
// 	// setTimeout(playGame, 1000 * 3);
// 	if ($("button").hasClass("correct")) {
// 			$("#question").text("Correct!");
// 			winCounter++;
// 			$("<p>" + solutions[0] + "</p>").appendTo("#question");
// 			$("#question").append(winningAnswer);
// 		} else {
// 			$("#question").text("Nope!");
// 			lossCounter++;
// 			$("<p>" + solutions[0] + "</p>").appendTo("#question");
// 			$("#question").append(winningAnswer);
// 		}
//   	})
// }

// GAME IS OVER
function displayScore() {
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
function startTimer() {
    timer = 30;
    $("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
    intervalID = setInterval(decrement, 1000);
}

// Decrement function -- this really messed me up!!
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

// The stop timer function
function stop() {
    clearInterval(intervalID);
}


// END OF WORKING CODE

/* Was testing here to fix the timer issue. Tried
linking these to the decrement function but could not get
past the first winning photo.*/

function advanceRoundOne() {
    $("<p>" + solutions[0] + "</p>").appendTo("#question");
    $("#question").append(winningAnswer);
    setTimeout(roundTwo, 1000 * 3);
}

function advanceRoundTwo() {
    $("<p>" + solutions[1] + "</p>").appendTo("#question");
    $("#question").append(winningAnswer2);
    setTimeout(roundThree, 1000 * 3);
}

function advanceRoundThree() {
    $("<p>" + solutions[2] + "</p>").appendTo("#question");
    $("#question").append(winningAnswer3);
    setTimeout(roundFour, 1000 * 3);
}

function advanceRoundFour() {
    $("<p>" + solutions[3] + "</p>").appendTo("#question");
    $("#question").append(winningAnswer4);
    setTimeout(displayScore, 1000 * 3);
}



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
