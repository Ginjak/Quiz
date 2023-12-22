var gameStartDiv = document.querySelector("#start-screen");
var gameStart = document.querySelector("#start");
var choicesDiv = document.querySelector("#choices");
var randomQuestionIdex;
var questionsDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var endScreen = document.querySelector("#end-screen");
var timeTracker = document.querySelector("#time");
var endScreenDiv = document.querySelector("#end-screen");
var correctAnswerBoolean;
var startingTime = 75;
var timeInterval;
timeTracker.textContent = startingTime;
var score;
var highScore;
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var highScoreButton = document.querySelector("#submit");

var alertMessage = document.createElement("p");

highScoreButton.addEventListener("click", function () {
  if (initials.value !== "" && initials.value.length <= 3) {
    var highScoreData = {
      score: `${score}`,
      initials: `${initials.value}`,
    };
    var highScireJsonString = JSON.stringify(highScoreData);

    localStorage.setItem("highScoreData", highScireJsonString);
    alertMessage.textContent = "";
    var highScorePage = "highscores.html";
    window.location.href = highScorePage;
  } else if (initials.value.length > 3) {
    alertMessage.textContent = "Please, enter no more then three letters";
    endScreenDiv.appendChild(alertMessage);
  } else {
    alertMessage.textContent = "Please, enter your initials";
    endScreenDiv.appendChild(alertMessage);
  }
});

gameStart.addEventListener("click", function (event) {
  event.stopPropagation();
  displayQuestion();
  hideStartGame();
  countdown();
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
    correctAnswerBoolean = true;
  } else {
    correctAnswerBoolean = false;
  }

  // Display the correct answer
  displayCorrectAnswer();
}

function displayQuestion() {
  questionsDiv.setAttribute("class", "");
  randomQuestion(questionsArr);
  questionTitle.textContent = questionsArr[randomQuestionIdex].question;
  var buttonNumber = 1;
  // First loop boolean value
  var firstLoop = true;
  for (var answer in questionsArr[randomQuestionIdex]) {
    // Checks if it is a first loop iteration and set's it to false (skips for iteration)
    if (firstLoop) {
      firstLoop = false;
      continue;
    }

    var choiceButton = document.createElement("button");
    choiceButton.textContent = `${buttonNumber}. ${questionsArr[randomQuestionIdex][answer]}`;
    choiceButton.key = answer;
    choicesDiv.appendChild(choiceButton);
    choiceButton.addEventListener("click", handleButtonClick);
    buttonNumber++;
  }
}

function displayCorrectAnswer() {
  var correctAnswer = questionsArr[randomQuestionIdex].correct;

  if (correctAnswerBoolean) {
    var updatedQuestion = questionsArr[randomQuestionIdex].question.replace(
      "________",
      correctAnswer
    );
    questionTitle.textContent = updatedQuestion;
    var answer = document.createElement("p");
    answer.textContent = "Correct answer!";
    choicesDiv.appendChild(answer);
    disableButton();
    setTimeout(function () {
      removeAllElements(choicesDiv);
    }, 1000);
    highScoreButton.disabled = false;
    questionsArr.splice(randomQuestionIdex, 1);
    if (questionsArr.length === 0) {
      clearInterval(timeInterval);
      score = startingTime;
      console.log(score);
      finalScore.textContent = score;
      setTimeout(function () {
        questionsDiv.setAttribute("class", "hide");
        endScreen.setAttribute("class", "");
      }, 1000);
      console.log(score);
      return;
    }
    setTimeout(function () {
      displayQuestion();
    }, 1000);
  } else {
    answer = document.createElement("p");
    answer.textContent = "Wrong answer!";
    choicesDiv.appendChild(answer);
    disableButton();
    setTimeout(function () {
      removeAllElements(choicesDiv);
    }, 1000);
    highScoreButton.disabled = false;
    questionsArr.splice(randomQuestionIdex, 1);
    if (questionsArr.length === 0) {
      clearInterval(timeInterval);
      score = startingTime;
      console.log(score);
      finalScore.textContent = score;
      setTimeout(function () {
        questionsDiv.setAttribute("class", "hide");
        endScreen.setAttribute("class", "");
      }, 1000);
      return;
    }
    setTimeout(function () {
      displayQuestion();
    }, 1000);
    startingTime = startingTime - 10;
  }
}

function removeAllElements(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}

function disableButton() {
  var buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

// Countdown function
function countdown() {
  timeInterval = setInterval(function () {
    if (startingTime > 1) {
      startingTime--;
      timeTracker.textContent = `${startingTime} `;
    } else if (startingTime === 1) {
      startingTime--;
      timeTracker.textContent = `${startingTime} `;
    } else if (startingTime === 0) {
      clearInterval(timeInterval);
    }
    //
  }, 1000);
}
randomQuestion(questionsArr);
