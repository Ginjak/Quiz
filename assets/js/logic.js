var gameStartDiv = document.querySelector("#start-screen");
var gameStart = document.querySelector("#start");
var choicesDiv = document.querySelector("#choices");
var randomQuestionIdex;
var questionTitle = document.querySelector("#question-title");

gameStart.addEventListener("click", function () {
  displayQuestion();
  hideStartGame();
});

function hideStartGame() {
  gameStartDiv.setAttribute("class", "hide");
}

function randomQuestion(arr) {
  randomQuestionIdex = Math.floor(Math.random() * arr.length);
  console.log(randomQuestionIdex);
}

function handleButtonClick(event) {
  var key = event.target.key;
  console.log("Key for the clicked button: " + key);

  if (key === "correct") {
    console.log("Correct answer!");
  } else {
    console.log("Incorrect answer.");
  }
}

function displayQuestion() {
  randomQuestion(questionsArr);
  questionTitle.textContent = questionsArr[randomQuestionIdex].question;
  for (var answer in questionsArr[randomQuestionIdex]) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = questionsArr[randomQuestionIdex][answer];
    choiceButton.key = answer;
    choicesDiv.appendChild(choiceButton);
    choiceButton.addEventListener("click", handleButtonClick);
  }
}

randomQuestion(questionsArr);
