var readlineSync = require("readline-sync");

var currScore = 0;

// Data of High Scores.

var highScores = [
  {
    name: "Tony",
    hScore: 3,
  },

  {
    name: "Chris",
    hScore: 2,
  },
]

// array of objects
var questions = [{
  question: "Where the Soul Stone located ? ",
  answer:  "Vormir"
},
{
  question: "What's the First Movie of MCU ? ",
  answer: "Iron Man"
},
{
  question: "How much percentage of shares of Pepper Potts in Stark Industries ? ",
  answer: "12"
},
{
  question: "How many realms are there in Asgard ? ",
  answer: "9"
},
{
  question: "Who is God of Mischief ? ",
  answer: "Loki"
}];
var userName = readlineSync.question("What's your name? ");
function welcome() {
  console.log("Welcome " + userName + " to FUN QUIZ ON MCU ?");
}

// Play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("Right!");
    currScore = currScore + 1;

  } else {
    console.log("Wrong!");

  }

  console.log("current score: ", currScore);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

// function to update High Scores
function updateHighScores() {
  var isSame = false;
  highScores.map(Score => {
    if (Score.hScore === currScore) {
      isSame = true;
      return;
    }
  });
  if (isSame) {
    return;
  } else {
    highScores.unshift({ name: userName, hScore: currScore });
  }
}

//function to show Scores
function showScores() {
  console.log("Wooohooo! You SCORED: ", currScore);

  console.log("Check out the high scores. (Updated Automatically.)");

  highScores.map(score => console.log(score.name, " : ", score.hScore))
}

welcome();
game();
updateHighScores();
showScores();