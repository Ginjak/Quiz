// Targeting html elements by ID
var gameStartDiv = document.querySelector("#start-screen");
var gameStart = document.querySelector("#start");
var choicesDiv = document.querySelector("#choices");
var questionsDiv = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var endScreen = document.querySelector("#end-screen");
var timeTracker = document.querySelector("#time");
var endScreenDiv = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var highScoreButton = document.querySelector("#submit");
var gameOverDiv = document.querySelector(".game-over");
// General variables
var randomQuestionIdex;
var correctAnswerBoolean;
var startingTime = 100;
var timeInterval;
var score;
var alertMessage = document.createElement("p");
var warningMessage = document.createElement("p");

// Setting initial timer text
timeTracker.textContent = startingTime;

/* +++++++++++++++++++++++ 
          Functions
   +++++++++++++++++++++++*/

// Adds hide class to "Coding Quiz Challenge" (hides whole div)
function hideStartGame() {
  gameStartDiv.setAttribute("class", "hide");
}

// Game over, function removes "hide" class from game-over div.
function gameOver() {
  if (startingTime < 1) {
    gameOverDiv.classList.remove("hide");
  }
}

// Generates random number between 0 and array length
function randomQuestion(arr) {
  randomQuestionIdex = Math.floor(Math.random() * arr.length);
}

// Function to display questions in random order from questiondsArr
function displayQuestion() {
  // Removes hide class questions div
  questionsDiv.setAttribute("class", "");
  // Generates random number between 0 and length of questiondsArr (array)
  randomQuestion(questionsArr);
  // Selects objects key "question" and display value in H2 tag (from questionsArr)
  questionTitle.textContent = questionsArr[randomQuestionIdex].question;
  // Asigns button number (for answers)
  var buttonNumber = 1;
  // First loop boolean value
  var firstLoop = true;
  // For...of loop, ignores first iteration (because first one is question and only answers needs to be displayed)
  for (var answer of Object.keys(questionsArr[randomQuestionIdex])) {
    if (firstLoop) {
      firstLoop = false;
      continue;
    }
    // Creates a new element "button" for all object key (apart of a first one) with number at the beginin and value after.
    var choiceButton = document.createElement("button");
    choiceButton.classList.add("answer-button");
    choiceButton.textContent = `${buttonNumber}. ${questionsArr[randomQuestionIdex][answer]}`;
    // Assings a key for each button. It helps to track correct answer later
    choiceButton.key = answer;
    choicesDiv.appendChild(choiceButton);
    // When newly created buttons are clicked function handleButtonClick is called
    choiceButton.addEventListener("click", handleButtonClick);
    buttonNumber++;
  }
}

// Remove all childs elements from parent
function removeAllElements(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}
// Disables button functionality for all buttons on the page
function disableButton(className) {
  var buttons = document.querySelectorAll("." + className);
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
    } else if (startingTime === 0 || startingTime < 0) {
      timeTracker.textContent = 0;
      clearInterval(timeInterval);
      removeAllElements(choicesDiv);
      questionsDiv.setAttribute("class", "hide");
      gameOver();
    }
    //
  }, 1000);
}

// Function to check if correct answer was clicked, if so displayCorrectAnswer() is called (it checks if object key is equal to "correct")
function handleButtonClick(event) {
  var key = event.target.key;
  // Check wich button was clicked
  var clickedButton = event.target;
  if (key === "correct") {
    correctAnswerBoolean = true;
  } else {
    correctAnswerBoolean = false;
  }
  // Adds class "clicked" to a clicked button
  clickedButton.classList.add("clicked");
  // Display the correct answer
  displayCorrectAnswer();
}

// Function to play a correct sound
function correctAudio() {
  var trueAudio = new Audio();
  trueAudio.src = "assets/sfx/correct.wav";
  trueAudio.play();
}
// Function to play a wrong sound
function wrongAudio() {
  var incorrectAudio = new Audio();
  incorrectAudio.src = "assets/sfx/incorrect.wav";
  incorrectAudio.play();
}

function displayCorrectAnswer() {
  // Variable for the value of correct answer
  var correctAnswer = questionsArr[randomQuestionIdex].correct;
  // If correct answer is clicked (correctAnswerBoolean === true)
  if (correctAnswerBoolean) {
    //Replacing part of question "_________" with correct answer
    var updatedQuestion = questionsArr[randomQuestionIdex].question.replace(
      "________",
      correctAnswer
    );
    // When question string is updated it is displayed again
    questionTitle.textContent = updatedQuestion;
    // When aswer is correct play a sound of correct answer
    correctAudio();
    // When answer is correct message below buttons appears "Correct answer!"
    var answer = document.createElement("p");
    answer.textContent = "Correct answer!";
    answer.style.color = "#478978";
    answer.style.paddingLeft = "17px";
    choicesDiv.appendChild(answer);
    // All buttons with class "answer-button" are disabled so it can't be clicked again until new question will appear
    disableButton("answer-button");
    // There is a delay of 1 sec. for user to check if answer was correct or wrong until all buttons and question disapears
    setTimeout(() => {
      removeAllElements(choicesDiv);
    }, 1000);
    // Remove an object (question) from questionsArr
    questionsArr.splice(randomQuestionIdex, 1);
    // If there are no more questions left and time is not 0
    if (questionsArr.length === 0 && timeInterval > 0) {
      // Stop the countdown
      clearInterval(timeInterval);
      // Players score is a left countdown time
      score = startingTime;
      // Adding class hide to questions div (to hide questions and answers). Class hide removed from end screen div (score and input field displayed). Also has 1 sec delay
      setTimeout(function () {
        questionsDiv.setAttribute("class", "hide");
        endScreen.setAttribute("class", "");
      }, 1000);
      // Score is displayed
      finalScore.textContent = score;
      // Loop end
      return;
    }
    // If there are still questions in array, new question displayed (with 1 sec delay for smooth transition)
    setTimeout(function () {
      displayQuestion();
    }, 1000);
    // Condition is answer is wrong
  } else {
    // Incorrect sound played when asnwer is incorrect
    wrongAudio();
    // When answer is wrong message below buttons appears "Wrong answer!" and color is red
    answer = document.createElement("p");
    answer.textContent = "Wrong answer!";
    answer.style.color = "#ED474A";
    answer.style.paddingLeft = "17px";
    choicesDiv.appendChild(answer);
    // All buttons with class "answer-button" are disabled so it can't be clicked again until new question will appear
    disableButton("answer-button");
    // There is a delay of 1 sec. for user to check if answer was correct or wrong until all buttons and question disapears
    setTimeout(() => {
      removeAllElements(choicesDiv);
    }, 1000);
    // Remove an object (question) from questionsArr
    questionsArr.splice(randomQuestionIdex, 1);
    // If there are no more questions left and time is not 0
    if (questionsArr.length === 0 && timeInterval > 0) {
      // Deduct 10 points, because answer was wrong and prevents finals score to be negative
      startingTime = Math.max(0, startingTime - 10);
      // Final score registered
      score = startingTime;
      // Countdown stops
      finalScore.textContent = score;
      // Timmer updated to a final score
      timeTracker.textContent = score;
      clearInterval(timeInterval);
      // Adding class hide to questions div (to hide questions and answers). Class hide removed from end screen div (score and input field displayed). Also has 1 sec delay
      if (score === 0) {
        gameOver();
        questionTitle.textContent = "";
        questionsDiv.setAttribute("class", "hide");
        return;
      }

      setTimeout(() => {
        questionsDiv.setAttribute("class", "hide");
        endScreen.setAttribute("class", "");
      }, 1000);

      // Score is displayed
      return;
    }
    // If there are still questions in array, new question displayed (with 1 sec delay for smooth transition) and 10 points deducted from countdown
    setTimeout(() => {
      displayQuestion();
    }, 1000);
    startingTime = startingTime - 10;
  }
}

/* +++++++++++++++++++++++ 
          Event Listeners
   +++++++++++++++++++++++*/

// Click event on Start Quiz button, call functions displayQuestion, hideStartGame, countdown. If quiz option not select message will appear

gameStart.addEventListener("click", function (event) {
  event.stopPropagation();
  if (questionsArr.length === 0) {
    // If questionsArr is empty message will be displayed, class is added to start button and it is disabled.
    warningMessage.textContent = "Please, select Quiz type";
    warningMessage.style.color = "#ED474A";
    warningMessage.style.marginTop = "20px";
    gameStartDiv.appendChild(warningMessage);
    gameStart.disabled = true;
    gameStart.classList.add("clicked");
  } else {
    //Game starts if condition is met
    displayQuestion();
    hideStartGame();
    countdown();
  }
});

// Click event on submit button. To submit players Initials and final score to local storage
highScoreButton.addEventListener("click", function () {
  // Codition if Itinials input is not empty and length is 3 or less characters
  if (initials.value !== "" && initials.value.length <= 3) {
    // Retrieves existing array from local storage or creates a new one if local storage is empty
    var storedResultsArr = JSON.parse(localStorage.getItem("resultsArr")) || [];
    // Push the current initials and score values as an object into the array
    storedResultsArr.push({ initials: initials.value, score: score });

    // Updated array in local storage
    localStorage.setItem("resultsArr", JSON.stringify(storedResultsArr));
    // Thank you message display for 1 sec and page redirects to highscores.html
    alertMessage.textContent = "Thank you";
    alertMessage.style.color = "#478978";
    alertMessage.style.paddingLeft = "5px";
    alertMessage.style.marginTop = "10px";
    endScreenDiv.appendChild(alertMessage);
    // Redirects page to highscores.html
    setTimeout(() => {
      var highScorePage = "highscores.html";
      window.location.href = highScorePage;
    }, 1000);
    // If player input more then 3 characters in initials input field
  } else if (initials.value.length > 3) {
    // Warning message appears
    alertMessage.textContent = "Please, enter no more then three characters";
    alertMessage.style.color = "#ED474A";
    alertMessage.style.paddingLeft = "5px";
    alertMessage.style.marginTop = "10px";
    endScreenDiv.appendChild(alertMessage);
  } else {
    // If input is blank warning message will appear
    alertMessage.textContent = "Please, enter your initials";
    alertMessage.style.color = "#ED474A";
    alertMessage.style.paddingLeft = "5px";
    alertMessage.style.marginTop = "10px";
    endScreenDiv.appendChild(alertMessage);
  }
});
