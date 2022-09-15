const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0; //start p1Score as 0
let p2Score = 0; //start p2Score as 0
let winningScore = 5;
let isGameOver = false;

function updateScores(score,button,display){
    
}
// once you click p1 button:
p1Button.addEventListener('click', function () {
    //if it's not game over yet, update score
    if (!isGameOver) {
        p1Score += 1; //calculate

        //if after updating score now hitting winning score, change status
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true; //disable any selection at the button
            p2Button.disabled = true;
        }

        //if after updating score is not at winning score yet: 
        p1Display.textContent = p1Score;  //update score in html
    }
})

// once you click p2 button:
p2Button.addEventListener('click', function () {
    //if it's not game over yet, update score
    if (!isGameOver) {
        p2Score += 1; //calculate

        //if after updating score now hitting winning score, change status
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true; //disable any selection at the button
            p2Button.disabled = true;
        }

        //if after updating score is not at winning score yet: 
        p2Display.textContent = p2Score;  //update score in html
    }
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
    p1Score = 0; // clear Score
    p2Score = 0;
    p1Display.textContent = 0;  //clear display  
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger'); //remove color
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false; //able any selection at the button
    p2Button.disabled = false;
}
