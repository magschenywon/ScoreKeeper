//create an object for p1, p2 to store their score, button & display
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 5;
let isGameOver = false;

// create a function for player and opponent (work either way)
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1; // if game is not over, update current player's score

        //if after updating score now hitting winning score, change status
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success'); //change player/opponent display
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;  //disable any selection at the button
            opponent.button.disabled = true;
        }

        //if after updating score is not at winning score yet: 
        player.display.textContent = player.score;  //update score in html
    }

}
// call update function to p1, set p1 as player and p2 as opponent
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

// call update function to p2, set p2 as player and p1 as opponent
p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})

//select option
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value); //transfer select string to int and set as winningScore
    reset();
})
// reset button
resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false; //clear game status
    for (let p of [p1, p2]) {
        p.score = 0; // clear Score
        p.display.textContent = 0; //clear display 
        p.display.classList.remove('has-text-success', 'has-text-danger'); //remove color
        p.button.disabled = false; //able any selection at the button
    }
}
