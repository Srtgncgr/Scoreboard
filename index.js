
let homeScoreScreen = document.getElementById("home-score");
let guestScoreScreen = document.getElementById("guest-score");

// HOME AND GUEST SCORE VARIABLES INITIALIZATION

homeScore = 0;
guestScore = 0;



function increasePoints(team, points) {
    if(team === 'home') {
    homeScoreScreen.innerText = homeScore + points;
    homeScore += points;
    } else if(team === 'guest') {
    guestScoreScreen.innerText = guestScore + points;
    guestScore += points;
    }
}


// NEW SCORE FUNCTION

function newGame() {
    homeScore = 0;   
    guestScore = 0;
    homeScoreScreen.innerText = 0;
    guestScoreScreen.innerText = 0;
}