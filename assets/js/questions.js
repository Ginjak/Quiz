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

function randomQuestionSelection(btnClass, arr) {
  disableButton("btnClass");
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
    randomQuestionSelection(clickedBtnId, animals);
    console.log(questionsArr);
  }
  if (clickedBtnId === "cars-btn") {
    randomQuestionSelection(clickedBtnId, cars);
    console.log(questionsArr);
  }
  if (clickedBtnId === "js-btn") {
    console.log("js-btn");
  }
  if (clickedBtnId === "css-btn") {
    console.log("css-btn");
  }
}

animalsQuiz.addEventListener("click", chooseQuiz);
carsQuiz.addEventListener("click", chooseQuiz);
jsQuiz.addEventListener("click", chooseQuiz);
cssQuiz.addEventListener("click", chooseQuiz);
// animalsQuiz.addEventListener("click", function () {
//   disableButton("topicBtn");
//   for (var i = 0; i < animals.length; i++) {
//     questionsArr.push(animals[i]);
//   }
//   console.log("animalsQuiz");
// });
