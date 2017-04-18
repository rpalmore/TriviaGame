$(document).ready(function() {});

// Create an object to hold questions, answers, and correct answers

/*
From what I can tell, the source of your problems is the way you defined your data, particularly the questions and their possible answers. You opted to use a separate array variable to store the answers for each question. This approach is a recipe for pain, since it immediately forces you to duplicate your code. (After all, you can iterate through the indices in an array, but there is no way to iterate through the variables in a scope!) Any time that you find yourself creating numbered variables (e.g. q1Choices, q2Choices, q3Choices, etc.), you should consider using an array instead.

The other decision that led you astray was that you did not provide yourself an easy way to determine whether the user selected the correct answer once he/she clicks on one of the choices. You used the index() method to determine the position of the clicked choice in the DOM, and you compared that index against the correct index in the original choices array. This approach is brittle, because it depends on a particular DOM structure (which will change as your JavaScript manipulates the rest of the page!). A much better approach is to maintain a reference to the DOM element for the correct choice in a separate variable (e.g. correctAnswer). Then in your click handler, you can simply compare the clicked element to this correct element to determine if the user made the right choice (e.g. if (this === correctAnswer) ...). Whenever you find yourself using index() like this, STOP -- use a variable to maintain a reference to the desired element instead! 
*/

var round1 = {
    question: '"One of the key problems today is that politics is such a disgrace.' + ' Good people don’t go into government."',
    choices: ["Bill Maher", "Oprah Winfrey", "Ralph Nader", "Donald Trump"],
    answer: 3,
    solution: 'The 45th president of the United States called politics "a disgrace."',
    image: "assets/images/Trump.jpg",
}

var round2 = {
    question: '"A bachelor is a guy who never made the same mistake once."',
    answer: 1,
    choices: ["Jerry Seinfeld", "Phyllis Diller", "Johnny Carson", "Wanda Sykes"],
    solution: 'Phyllis Diller made her debut as a stand-up comedian at age 37.',
    image: "assets/images/Diller.jpg"
}

var round3 = {
    question: '"Confidence is 10 percent hard work and 90 percent delusion."',
    answer: 2,
    choices: ["Woody Allen", "Dolly Parton", "Tina Fey", "Mark Twain"],
    solution: 'The former "SNL" star who got her start at The Second City'
            + ' once called Evanston home.',
    image: "assets/images/TinaFey.jpg"
}

var round4 = {
    question: '"Confidence is 10 percent hard work and 90 percent delusion."',
    answer: 0,
    choices: ["Alfred Hitchcock", "Orson Welles", "M. Night Shyamalan", "Stephen King"],
    solution: 'The late "Master of Suspense" was a pioneer in the genres of'
            + ' suspense and psychological thrillers.',
    image: "assets/images/Hitchcock.jpg"
}

var round5 = {
    question: '"Confidence is 10 percent hard work and 90 percent delusion."',
    answer: 3,
    choices: ["Steve Jobs", "Maya Angelou", "Confucius", "Charlie Chaplin"],
    solution: 'The silent film icon was best known for his character "the tramp."',
    image: "assets/images/Chaplin.jpg"
}


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
    $("#giphy").prepend(giphy);
    $("#startButton").on("click", function() {
        $(".startButton").remove();
        $("#giphy").remove();
        playGame();
    })
}
start();

function playGame() {
    winCounter = 0;
    lossCounter = 0;
    unanswered = 0;
    startTimer();
    $("#question").text(round1.question);
    for (var i = 0; i < round1.choices.length; i++) {
        $("<button>" + round1.choices[i] + "</button>").appendTo(".choices").addClass("correct" + i);
            } compareClickValues();
}


function compareClickValues() {
    $("button").on("click", function() {
        stop();
        $("button").hide();
        setTimeout(playRoundTwo, 1000 * 3);
            if ($(this).hasClass("correct3")) {
            $("#question").text("Correct!");
            winCounter++;
            $("<p>" + round1.solution + "</p>").appendTo("#question");
            $("#question").append($("<img>").attr("src", "assets/images/Trump.jpg"));
        } else {
            $("#question").text("Nope!");
            lossCounter++;
             $("<p>" + round1.solution + "</p>").appendTo("#question")
            $("#question").append($("<img>").attr("src", "assets/images/Trump.jpg"));
        }
    })
}

function playRoundTwo() {
    startTimer();
    $("#question").text(round2.question);
    for (var i = 0; i < round2.choices.length; i++) {
        $("<button>" + round2.choices[i] + "</button>").appendTo(".choices").addClass("correct" + i);
            } compareClickValues2();
}


function compareClickValues2() {
    $("button").on("click", function() {
        stop();
        $("button").hide();
        setTimeout(playRoundThree, 1000 * 3);
            if ($(this).hasClass("correct1")) {
            $("#question").text("Correct!");
            winCounter++;
            $("<p>" + round2.solution + "</p>").appendTo("#question");
            $("#question").append($("<img>").attr("src", "assets/images/Diller.jpg"));
        } else {
            $("#question").text("Nope!");
            lossCounter++;
             $("<p>" + round2.solution + "</p>").appendTo("#question")
            $("#question").append($("<img>").attr("src", "assets/images/Diller.jpg"));
        }
    })
}

function playRoundThree() {
    startTimer();
    $("#question").text(round3.question);
    for (var i = 0; i < round3.choices.length; i++) {
        $("<button>" + round3.choices[i] + "</button>").appendTo(".choices").addClass("correct" + i);
            } compareClickValues3();
}

function compareClickValues3() {
    $("button").on("click", function() {
        stop();
        $("button").hide();
        setTimeout(playRoundFour, 1000 * 3);
            if ($(this).hasClass("correct2")) {
            $("#question").text("Correct!");
            winCounter++;
            $("<p>" + round3.solution + "</p>").appendTo("#question");
            $("#question").append($("<img>").attr("src", "assets/images/TinaFey.jpg"));
        } else {
            $("#question").text("Nope!");
            lossCounter++;
             $("<p>" + round3.solution + "</p>").appendTo("#question")
            $("#question").append($("<img>").attr("src", "assets/images/TinaFey.jpg"));
        }
    })
}


function playRoundFour() {
    startTimer();
    $("#question").text(round4.question);
    for (var i = 0; i < round4.choices.length; i++) {
        $("<button>" + round4.choices[i] + "</button>").appendTo(".choices").addClass("correct" + i);
            } compareClickValues4();
}

function compareClickValues4() {
    $("button").on("click", function() {
        stop();
        $("button").hide();
        setTimeout(playRoundFive, 1000 * 3);
            if ($(this).hasClass("correct0")) {
            $("#question").text("Correct!");
            winCounter++;
            $("<p>" + round4.solution + "</p>").appendTo("#question");
            $("#question").append($("<img>").attr("src", "assets/images/Hitchcock.jpg"));
        } else {
            $("#question").text("Nope!");
            lossCounter++;
             $("<p>" + round4.solution + "</p>").appendTo("#question")
            $("#question").append($("<img>").attr("src", "assets/images/Hitchcock.jpg"));
        }
    })
}

function playRoundFive() {
    startTimer();
    $("#question").text(round5.question);
    for (var i = 0; i < round5.choices.length; i++) {
        $("<button>" + round5.choices[i] + "</button>").appendTo(".choices").addClass("correct" + i);
            } compareClickValues5();
}

function compareClickValues5() {
    $("button").on("click", function() {
        stop();
        $("button").hide();
        setTimeout(displayScore, 1000 * 3);
            if ($(this).hasClass("correct3")) {
            $("#question").text("Correct!");
            winCounter++;
            $("<p>" + round5.solution + "</p>").appendTo("#question");
            $("#question").append($("<img>").attr("src", "assets/images/Chaplin.jpg"));
        } else {
            $("#question").text("Nope!");
            lossCounter++;
             $("<p>" + round5.solution + "</p>").appendTo("#question")
            $("#question").append($("<img>").attr("src", "assets/images/Chaplin.jpg"));
        }
    })
}


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
        playGame();
    })
}

var timer = 20;
var intervalID;

// Set the clock and decrement by 1 per second
function startTimer() {
    timer = 5;
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
        $("<p>" + round1.solution + "</p>").appendTo("#question");
        $("#question").append($("<img>").attr("src", "assets/images/Trump.jpg"));
        unanswered++;
        setTimeout(playRoundTwo, 1000 * 3);
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

