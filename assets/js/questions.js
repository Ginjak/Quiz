var correctAnswer = "________";
var questionsArr = [];
var animals = [
  {
    question: `Which mammal is known to have the most powerful bite in the world?`,
    answerOne: "Lion",
    answerTwo: "Crocodile",
    correct: "Hippopotamus",
    answerThree: "Horse",
  },
  {
    question: `${correctAnswer} can smell its prey from almost two miles`,
    correct: "Wolf",
    answerOne: "Dog",
    answerTwo: "Cat",
    answerThree: "Snake",
  },
  {
    question: `Which animal’s stripes are on their skin as well as their fur?`,
    answerOne: "Zebra",
    correct: "Tiger",
    answerTwo: "Leopard",
    answerThree: "Cat",
  },
  {
    question: `It takes two weeks for ${correctAnswer} to digest a meal`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `5`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `6`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `7`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `8`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `9`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `10`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `11`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `11`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `12`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `13`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `14`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
];

var cars = [
  {
    question: `Cars 1`,
    answerOne: "Lion",
    answerTwo: "Crocodile",
    correct: "Hippopotamus",
    answerThree: "Horse",
  },
  {
    question: `Cars 2`,
    correct: "Wolf",
    answerOne: "Dog",
    answerTwo: "Cat",
    answerThree: "Snake",
  },
  {
    question: `Cars 3`,
    answerOne: "Zebra",
    correct: "Tiger",
    answerTwo: "Leopard",
    answerThree: "Cat",
  },
  {
    question: `Cars 4`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `Cars 5`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `Cars 6`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `Cars 7`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `Cars 8`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `Cars 9`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `Cars 10`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `Cars 11`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `Cars 12`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `Cars 13`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `Cars 14`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `Cars 15`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
];
var js = [
  {
    question: `js 1`,
    answerOne: "Lion",
    answerTwo: "Crocodile",
    correct: "Hippopotamus",
    answerThree: "Horse",
  },
  {
    question: `js 2`,
    correct: "Wolf",
    answerOne: "Dog",
    answerTwo: "Cat",
    answerThree: "Snake",
  },
  {
    question: `js 3`,
    answerOne: "Zebra",
    correct: "Tiger",
    answerTwo: "Leopard",
    answerThree: "Cat",
  },
  {
    question: `js 4`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `js 5`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `js 6`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `js 7`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `js 8`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `js 9`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `js 10`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `js 11`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `js 12`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `js 13`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `js 14`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `js 15`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
];
var css = [
  {
    question: `css 1`,
    answerOne: "Lion",
    answerTwo: "Crocodile",
    correct: "Hippopotamus",
    answerThree: "Horse",
  },
  {
    question: `css 2`,
    correct: "Wolf",
    answerOne: "Dog",
    answerTwo: "Cat",
    answerThree: "Snake",
  },
  {
    question: `css 3`,
    answerOne: "Zebra",
    correct: "Tiger",
    answerTwo: "Leopard",
    answerThree: "Cat",
  },
  {
    question: `css 4`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `css 5`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `css 6`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `css 7`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `css 8`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `css 9`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `css 10`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `css 11`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `css 12`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `css 13`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `css 14`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
  {
    question: `css 15`,
    correct: "Sloth",
    answerOne: "Python",
    answerTwo: "Koala",
    answerThree: "Camel",
  },
];
// var questionsArr = [
//   {
//     question: `Which mammal is known to have the most powerful bite in the world?`,
//     answerOne: "Lion",
//     answerTwo: "Crocodile",
//     correct: "Hippopotamus",
//     answerThree: "Horse",
//   },
//   {
//     question: `${correctAnswer} can smell its prey from almost two miles`,
//     correct: "Wolf",
//     answerOne: "Dog",
//     answerTwo: "Cat",
//     answerThree: "Snake",
//   },
//   {
//     question: `Which animal’s stripes are on their skin as well as their fur?`,
//     answerOne: "Zebra",
//     correct: "Tiger",
//     answerTwo: "Leopard",
//     answerThree: "Cat",
//   },
//   {
//     question: `It takes two weeks for ${correctAnswer} to digest a meal`,
//     correct: "Sloth",
//     answerOne: "Python",
//     answerTwo: "Koala",
//     answerThree: "Camel",
//   },
// ];

function disableButton(className) {
  var buttons = document.querySelectorAll("." + className);
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function randomQuestion(arr) {
  randomQuestionIdex = Math.floor(Math.random() * arr.length);
}

var animalsQuiz = document.querySelector("#animals-btn");
var carsQuiz = document.querySelector("#cars-btn");
var jsQuiz = document.querySelector("#js-btn");
var cssQuiz = document.querySelector("#css-btn");
var gameStart = document.querySelector("#start");

function randomQuestionSelection(btnClass, arr) {
  for (var i = 0; i < 10; i++) {
    randomQuestion(arr);
    questionsArr.push(arr[randomQuestionIdex]);
    arr.splice(randomQuestionIdex, 1);
    console.log(animals);
    console.log(randomQuestionIdex);
  }
}

function chooseQuiz(event) {
  var clickedBtnId = event.target.id;
  if (clickedBtnId === "animals-btn") {
    disableButton("topic-btn");
    animalsQuiz.classList.add("clicked");
    gameStart.disabled = false;
    randomQuestionSelection(clickedBtnId, animals);
    console.log(questionsArr);
    if (gameStartDiv.contains(warningMessage)) {
      gameStartDiv.removeChild(warningMessage);
      gameStart.classList.remove("clicked");
    }
  }
  if (clickedBtnId === "cars-btn") {
    disableButton("topic-btn");
    carsQuiz.classList.add("clicked");
    gameStart.disabled = false;
    randomQuestionSelection(clickedBtnId, cars);
    console.log(questionsArr);
    if (gameStartDiv.contains(warningMessage)) {
      gameStartDiv.removeChild(warningMessage);
      gameStart.classList.remove("clicked");
    }
  }
  if (clickedBtnId === "js-btn") {
    disableButton("topic-btn");
    gameStart.disabled = false;
    jsQuiz.classList.add("clicked");
    randomQuestionSelection(clickedBtnId, js);
    console.log(questionsArr);
    if (gameStartDiv.contains(warningMessage)) {
      gameStartDiv.removeChild(warningMessage);
      gameStart.classList.remove("clicked");
    }
  }
  if (clickedBtnId === "css-btn") {
    disableButton("topic-btn");
    gameStart.disabled = false;
    cssQuiz.classList.add("clicked");
    randomQuestionSelection(clickedBtnId, css);
    console.log(questionsArr);
    if (gameStartDiv.contains(warningMessage)) {
      gameStartDiv.removeChild(warningMessage);
      gameStart.classList.remove("clicked");
    }
  }
}

animalsQuiz.addEventListener("click", chooseQuiz);
carsQuiz.addEventListener("click", chooseQuiz);
jsQuiz.addEventListener("click", chooseQuiz);
cssQuiz.addEventListener("click", chooseQuiz);
