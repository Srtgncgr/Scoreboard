let homeScoreScreen = document.getElementById("home-score");
let guestScoreScreen = document.getElementById("guest-score");
homeScore = 0;
guestScore = 0;

function homePlusOne() {
    homeScoreScreen.innerText = homeScore + 1;
    homeScore += 1;
}

function homePlusTwo() {
    homeScoreScreen.innerText = homeScore + 2;
    homeScore += 2;
}

function homePlusThree() {
    homeScoreScreen.innerText = homeScore + 3;
    homeScore += 3;
}

function guestPlusone() {
    guestScoreScreen.innerText = guestScore + 1;
    guestScore +=1;
}

function guestPlusTwo() {
    guestScoreScreen.innerText = guestScore + 2;
    guestScore +=2;
}

function guestPlusThree() {
    guestScoreScreen.innerText = guestScore + 3;
    guestScore +=3;
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreScreen.innerText = homeScore;
    guestScoreScreen.innerText = guestScore;
}