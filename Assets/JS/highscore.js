//Variables
var highScore = document.querySelector(".highscore");
var clear = document.querySelector(".clear");
var goBack = document.querySelector(".go-back");

// Clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// Storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

// Index change
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});