//Variables
var highScore = document.querySelector(".highscore");
var clear = document.querySelector(".clear");
var goBack = document.querySelector(".go-back");

// Clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();

// Index change
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});