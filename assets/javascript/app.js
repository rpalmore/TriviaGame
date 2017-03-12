/* Create variables, arrays, etc.

1. Array of 5 questions x
2. Each question array has array of 4 choices x
3. Timer variable
4. Start button

*/
    
$( document ).ready(function() {
    console.log( "ready!" );
});


var questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"]

var q1Choices = ["Q1 choice 1", "Q1 choice 2", "Q1 choice 3", "Q1 choice 4",]
var q2Choices = ["Q2 choice 1", "Q2 choice 2", "Q2 choice 3", "Q2 choice 4",]
var q3Choices = ["Q3 choice 1", "Q3 choice 2", "Q3 choice 3", "Q3 choice 4",]
var q4Choices = ["Q4 choice 1", "Q4 choice 2", "Q4 choice 3", "Q4 choice 4",]
var q5Choices = ["Q5 choice 1", "Q5 choice 2", "Q5 choice 3", "Q5 choice 4",]

// var correctChoices = ["Q1 choice 1", "Q2 choice 2", "Q3 choice 1", "Q4 choice 1", 
// "Q5 choice 1"]

var correctChoices = [q1Choices[0], q2Choices[0], q3Choices[0], q4Choices[0], 
q5Choices[0]];
console.log(correctChoices);
console.log(correctChoices[0]);

var userGuess = [];

// var timer = {
// 	time: 30
// }
// var interval;

/* Step one: Attach a click event to start button
When user clicks "start," the following will happen:
	Start button will be hidden/replaced with
		1. Question 1 x
		2. 4 buttons showing possibile choices x
		3. Timer starts x
*/

// function startGame () {
// $("#startButton").click(function() {
// 	$(".start").remove();
// 	runTimer();
// 	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
// 	$("#question").text("Question 1");
// 	for (var i = 0; i < q1Choices.length; i++) {
// 		var userChoices = $("<button>");
// 		userChoices.addClass("choice-button button button-color");
// 		userChoices.attr("data-button", q1Choices[i]);
// 		userChoices.text(q1Choices[i]);
// 		$("#buttons").append(userChoices);
// 		console.log(q1Choices[i]);
// 	}
// })
// };

// $("#buttons").on("click", function (){
// 	console.log("i was clicked");
// if (userGuess == correctChoices[0]) {
// 	console.log("You win!");
// 	console.log(userGuess);
// }
// });

// THIS IS ALSO WORKING CODE
function startGame () {
$("#startButton").click(function() {
	$(".start").remove();
	runTimer();
	$("#timer").text("Time remaining:" + (" ") + timer + (" ") + "seconds");
	$("#question").text("Question 1");
	for (var i = 0; i < q1Choices.length; i++) {
	$("<button>" + q1Choices[i] + "</button>").appendTo(".choices");
	console.log(q1Choices[i]);
	$( "button" ).eq( i ).on( "click", { value: i }, function( event ) {
    console.log("button = " + $(this).index());
    // if ($(this).index() == q1Choices.index) {
    // 	console.log("Yeah!!!!");
    }
})
}
})
};

// $(".choices, #buttons").on("click", function(){

// 	console.log("I was clicked!");
// })
/* Step two: Capture the click event data
*/

/* Step three: Dynamically create new div and append to "correctChoice" 
if user picks correctly
*/
// var winningAnswer = $("<div>");
// winningAnswer.addClass("test")
// var losingAnswer = $("<div>");
// winningAnswer.addClass("test")
// // if user selects winning answer, do this:

// winningAnswer.text("You win!");
// $(".correctChoice").append(winningAnswer);
// // else, do this:

// winningAnswer.text("You lose!");
// $(".correctChoice").append(losingAnswer);
// console.log($(this));
// console.log(this);
// console.log(correctChoices[0]);
// console.log(q1Choices[0]);
// });

// Step four: Stop timer when user clicks on any "choices" button x

// Set timer to 30 seconds
var timer = 30;
// Variable to hold interval ID
var intervalID;
// click event
$(".choices").on("click", stop);
// The "run" function sets an interval and decrements counter by one per second
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
	}
}
// stop function
function stop() {
	clearInterval(intervalID);
}


startGame();






