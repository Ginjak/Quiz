var clearButton = document.querySelector("#clear");
var highScoresOl = document.querySelector("#highscores");

var storedResultsArr = JSON.parse(localStorage.getItem("resultsArr")) || [];

// Sorting array from highest score to lowest
storedResultsArr.sort(function (a, b) {
  return b.score - a.score;
});

// Iterate through the array
storedResultsArr.forEach(function (result) {
  var initials = result.initials;
  var score = result.score;

  // Create a new li element for each iteration
  var liEl = document.createElement("li");
  liEl.textContent = `${initials} - ${score}`;

  // Append the new li element to the ordered list
  highScoresOl.appendChild(liEl);

  console.log(`Initials: ${initials}, Score: ${score}`);
});

// Clear high score
clearButton.addEventListener("click", function () {
  localStorage.clear();
  while (highScoresOl.firstChild) {
    highScoresOl.removeChild(highScoresOl.firstChild);
  }
});
