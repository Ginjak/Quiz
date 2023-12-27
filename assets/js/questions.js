// Selecting buttons
var animalsQuiz = document.querySelector("#animals-btn");
var carsQuiz = document.querySelector("#cars-btn");
var jsQuiz = document.querySelector("#js-btn");
var cssQuiz = document.querySelector("#css-btn");
var gameStart = document.querySelector("#start");
// Initial string in question, where correct answer should be displayed
var correctAnswer = "________";
var questionsArr = [];
// Arrays of questions depending on category
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
    question: `${correctAnswer} is the fastest land animal?`,
    answerOne: "Horse",
    answerTwo: "Panther",
    answerThree: "Puma",
    correct: "Cheetah",
  },
  {
    question: `What’s the only mammal that’s able to fly?`,
    correct: "Bat",
    answerOne: "Cow",
    answerTwo: "Ostrich",
    answerThree: "Chicken",
  },
  {
    question: `What are the horns of a rhinoceros made of?`,
    answerOne: "Bone",
    correct: "Hair",
    answerTwo: "Wood",
    answerThree: "Teeth",
  },
  {
    question: `${correctAnswer} is the only mammal that can’t jump`,
    answerOne: "Turkey",
    answerTwo: "Giraffe",
    answerThree: "Camel",
    correct: "Elephant",
  },
  {
    question: `Which animal can stand on its tail?`,
    correct: "Kangaroo",
    answerOne: "Dog",
    answerTwo: "Monkey",
    answerThree: "Cat",
  },
  {
    question: `${correctAnswer} can move its eyes independently`,
    answerOne: "Chicken",
    answerTwo: "Donkey",
    correct: "Chameleon",
    answerThree: "Camel",
  },
  {
    question: `What do snakes use to smell?`,
    correct: "Tongue",
    answerOne: "Eyes",
    answerTwo: "Nose",
    answerThree: "Ears",
  },
  {
    question: `What color is an Elephant Hawk-Moth?`,
    answerOne: "Blue",
    answerTwo: "Red",
    answerThree: "Yellow",
    correct: "Pink",
  },
  {
    question: `How many legs do cockroaches have?`,
    correct: "Six",
    answerOne: "Eleven",
    answerTwo: "Eight",
    answerThree: "Four",
  },
  {
    question: `How long does the average Housefly live for?`,
    answerOne: "1 day",
    correct: "28 Days",
    answerTwo: "60 days",
    answerThree: "7 days",
  },
];

var cars = [
  {
    question: `In 1971, the Rolls-Royce Silver Shadow two door models were given what name?`,
    answerOne: "Silver wing",
    answerTwo: "Crocodile",
    correct: "Corniche",
    answerThree: "Dark moon",
  },
  {
    question: `In which European city is The Volvo Group headquarters?`,
    correct: "Gothenburg",
    answerOne: "London",
    answerTwo: "Stockholm",
    answerThree: "Paris",
  },
  {
    question: `Who appeared in Top Gear alongside Richard Hammond and Jeremy Clarkson from 2003 to 2015?`,
    answerOne: "Brad Pitt",
    answerTwo: "Chris Harris",
    correct: "James May",
    answerThree: "Rory Reid",
  },
  {
    question: `The slogan for which auto brand is 'the best or nothing'?`,
    correct: "Mercedes-Benz",
    answerOne: "Audi",
    answerTwo: "BMW",
    answerThree: "Ford",
  },
  {
    question: `Which vehicle model is 'The Evoque'?`,
    correct: "Range Rover",
    answerOne: "Ford",
    answerTwo: "Vauxhall",
    answerThree: "Audi",
  },
  {
    question: `Lada is a marque of car manufactured by which country?`,
    answerOne: "Croatia",
    answerTwo: "Poland",
    answerThree: "Slovenia",
    correct: "Russia",
  },
  {
    question: `The 'Leaf' is a best selling highway-capable all-electric car produced by which company?`,
    answerOne: "Toyota",
    correct: "Nissan",
    answerTwo: "Honda",
    answerThree: "Audi",
  },
  {
    question: `How many rings are in the Audi logo?`,
    correct: "Four",
    answerOne: "Three",
    answerTwo: "Six",
    answerThree: "Two",
  },
  {
    question: `Lexus is the luxury vehicle division of which Japanese car manufacturer?`,
    answerOne: "Hyundai",
    answerTwo: "Honda",
    answerThree: "Nissan",
    correct: "Toyota",
  },
  {
    question: `Which Italian luxury car manufacturer founded in 1914, in Bologna, has the tagline 'Luxury, sports and style cast in exclusive cars'?`,
    answerOne: "Lamborghini",
    answerTwo: "Ferrari",
    correct: "Maserati",
    answerThree: "Alfa romeo",
  },
  {
    question: `Which luxury auto company was named after the founder of Detroit?`,
    correct: "Cadillac",
    answerOne: "Buick",
    answerTwo: "Chevrolet",
    answerThree: "Jeep",
  },
  {
    question: `Motor City is the nickname for which American city?`,
    answerOne: "New York",
    answerTwo: "Washington",
    answerThree: "San Francisco",
    correct: "Detroit",
  },
  {
    question: `Which automobile manufacturer's logo means 'Advancement through Technology'?`,
    correct: "Audi",
    answerOne: "Toyota",
    answerTwo: "Kia",
    answerThree: "BMW",
  },
  {
    question: `Which brand's logo depicts a form of Viking longship?`,
    answerOne: "Audi",
    correct: "Lada",
    answerTwo: "BMW",
    answerThree: "Honda",
  },
  {
    question: `The headquarters of Fiat are in which Italian city?`,
    answerOne: "Bologna",
    answerTwo: "Milan",
    answerThree: "Roma",
    correct: "Turin",
  },
];
var js = [
  {
    question: `Javascript is an ${correctAnswer} language?`,
    answerOne: "Procedural",
    answerTwo: "Object-Based",
    correct: "Object-Oriented",
    answerThree: "None of the above",
  },
  {
    question: `Which of the following methods is used to access HTML elements using Javascript?`,
    answerOne: "getElementbyId()",
    answerTwo: "getElementByClassName()",
    correct: "1 and 2",
    answerThree: "None of the above",
  },
  {
    question: `Upon encountering empty statements, what does the Javascript Interpreter do?`,
    answerOne: "Throws an error",
    correct: "Ignores the statment",
    answerTwo: "Give a warning",
    answerThree: "None of the above",
  },
  {
    question: `How can a datatype be declared to be a constant type?`,
    correct: "const",
    answerOne: "var",
    answerTwo: "let",
    answerThree: "this",
  },
  {
    question: `What keyword is used to check whether a given property is valid or not?`,
    answerOne: "is in",
    answerTwo: "exists",
    answerThree: "lies",
    correct: "in",
  },
  {
    question: `When an operator’s value is NULL, the typeof returned by the unary operator is:`,
    correct: "Object",
    answerOne: "Boolean",
    answerTwo: "Undifiend",
    answerThree: "Integer",
  },
  {
    question: `Which function is used to serialize an object into a JSON string in Javascript?`,
    answerOne: "parse()",
    answerTwo: "convert()",
    answerThree: "toLowerCase()",
    correct: "stringify()",
  },
  {
    question: `Which of the following are closures in Javascript?`,
    answerOne: "Variables",
    answerTwo: "Functions",
    answerThree: "Objects",
    correct: "All of the above",
  },
  {
    question: `Which of the following is not a Javascript framework?`,
    correct: "Cassandra",
    answerOne: "Node",
    answerTwo: "Vue",
    answerThree: "React",
  },
  {
    question: `What keyword is used to declare an asynchronous function in Javascript?`,
    answerOne: "await",
    answerTwo: "setTimeout",
    correct: "async",
    answerThree: "None of the above",
  },
  {
    question: `How to stop an interval timer in Javascript?`,
    correct: "clearInterval",
    answerOne: "clearTimer",
    answerTwo: "intervalOver",
    answerThree: "None of the above",
  },
  {
    question: `What does … operator do in JS?`,
    answerOne: "No such operator exists",
    answerTwo: "Closes web browser",
    correct: "It is used to spread iterables to individual elements",
    answerThree: "Displays and error",
  },
  {
    question: `How do we write a comment in javascript?`,
    answerOne: "/* */",
    answerTwo: "#",
    answerThree: "<?php ?>",
    correct: "//",
  },
  {
    question: `Which of the following are not server-side Javascript objects?`,
    answerOne: "Function",
    answerTwo: "Date",
    answerThree: "FileUpload",
    correct: "All of the above",
  },
];
var css = [
  {
    question: `How can you created rounded corners using CSS3?`,
    answerOne: "border[round]: 30px;",
    answerTwo: "corner-effect: round;",
    correct: "border-radius: 30px;",
    answerThree: "alpha-effect: round-corner;",
  },
  {
    question: `How do you add shadow to elements in CSS3?`,
    correct: "box-shadow: 10px 10px 5px grey;",
    answerOne: "shadow-right: 10px shadow-bottom: 10px;",
    answerTwo: "shadow-color: grey;",
    answerThree: "alpha-effect[shadow]: 10px 10px 5px grey;",
  },
  {
    question: `How to you modify a border image using CSS3?`,
    answerOne: "border: url(image.png);",
    answerTwo: "border-variable: image url(image.png);",
    correct: "border-image: url(border.png) 30 30 round;",
    answerThree: "None",
  },
  {
    question: `How to resize a background image using CSS3?`,
    correct: "background-size: 80px 60px;",
    answerOne: "bg-dimensions: 80px 60px;",
    answerTwo: "background-proportion: 80px 60px;",
    answerThree: "alpha-effect: bg-resize 80px 60px;",
  },
  {
    question: `How to add text shadow using CSS3?`,
    answerOne: "font: shadowed 5px 5px 5px grey;",
    answerTwo: "font-shadow: 5px 5px 5px grey;",
    answerThree: "shadow: text 5px 5px 5px grey;",
    correct: "text-shadow: 5px 5px 5px grey;",
  },
  {
    question: `How to rotate objects using CSS3?`,
    correct: "transform: rotate(30deg);",
    answerOne: "object-rotation: 30deg;",
    answerTwo: "transform: rotate-30deg-clockwise;",
    answerThree: "rotate-object: 30deg;",
  },
  {
    question: `How to create transition effects using CSS3?`,
    correct: "transition: width 2s;",
    answerOne: "transition-duration: 2s; transition-effect: width;",
    answerTwo: "alpha-effect: transition (width,2s);",
    answerThree: "None",
  },
  {
    question: `What does RGBa mean?`,
    answerOne: "Review Get assistance Back-up your information acquire proof",
    answerTwo: "Red Green Blue alpha",
    correct: "Red Gray Brown alpha",
    answerThree: "Red Gold Black alpha",
  },
  {
    question: `${correctAnswer} is a property that allows developers to add rounded corners on the design elements.`,
    correct: "Border-Radius",
    answerOne: "Corner",
    answerTwo: "Box Shadow",
    answerThree: "Round Corner",
  },
  {
    question: `If you put a value of 0 for a Border-Radius what will happen?`,
    answerOne: "The world will end.",
    answerTwo: "The Corner will curve horizontal.",
    answerThree: "The Corner will curve vertical.",
    correct: "The Corner will be square.",
  },
];

/* +++++++++++++++++++++++ 
          Functions
   +++++++++++++++++++++++*/
// Disable button depenging on class name
function disableButton(className) {
  var buttons = document.querySelectorAll("." + className);
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

// Generate random number depending on array length
function randomQuestion(arr) {
  randomQuestionIdex = Math.floor(Math.random() * arr.length);
}

// Generate random 10 questions depending which button was clicked.
// Question pushed to questionsArr (splice method assures that there won't be dublicate questions ir questionsArr)
function randomQuestionSelection(btnClass, arr) {
  for (var i = 0; i < 10; i++) {
    randomQuestion(arr);
    questionsArr.push(arr[randomQuestionIdex]);
    arr.splice(randomQuestionIdex, 1);
  }
}

// Function to check which button was clicked
function chooseQuiz(event) {
  var clickedBtnId = event.target.id;
  if (clickedBtnId === "animals-btn") {
    // Function called to make sure that no other button can be selected with "topic-btn" class
    disableButton("topic-btn");
    // Added class "clicked" so user can see which button he clicked
    animalsQuiz.classList.add("clicked");
    // Game start button is clicable now
    gameStart.disabled = false;
    // Array of questions generated
    randomQuestionSelection(clickedBtnId, animals);
    if (gameStartDiv.contains(warningMessage)) {
      // Statement checks if warning message is displayed and it can be removed, because questions array is not empty anymore
      gameStartDiv.removeChild(warningMessage);
      gameStart.classList.remove("clicked");
    }
  }
  // Same action as above for all Quiz topic buttons
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
/* +++++++++++++++++++++++ 
          Event Listeners
   +++++++++++++++++++++++*/

// Click on the quiz type button
animalsQuiz.addEventListener("click", chooseQuiz);
carsQuiz.addEventListener("click", chooseQuiz);
jsQuiz.addEventListener("click", chooseQuiz);
cssQuiz.addEventListener("click", chooseQuiz);
