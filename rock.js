let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const user_score = document.querySelector('#user-score');
const comp_score = document.querySelector('#comp-score');



// all choices selected in the images
// computer choice paper
const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return option[randInd];
}
// draw a game
const drawGame = () => {
    console.log('Game was Draw!');
    msg.innerText = 'Game was Draw!. Play again';
    msg.style.backgroundColor = 'orange';
}
const showWinner = (userWin, userChoiceId, comp) => {
    if (userWin) {
        userScore++;
        user_score.innerText = userScore;
        console.log('user win');
        msg.innerText = `You win! your ${userChoiceId} beats ${comp}`;
        msg.style.backgroundColor = 'green'

    } else {
        compScore++;
        comp_score.innerText = compScore;
        console.log('user lose');
        msg.innerText = `You lose! ${comp} beats Your ${userChoiceId}`;
        msg.style.backgroundColor = 'red';
    }
}
// user choices function
const playGame = (userChoiceId) => {
    // computer
    console.log(userChoiceId);
    const comp = genCompChoice();
    console.log(comp, 'computer');
    if (userChoiceId === comp) {
        // Draw a game 
        drawGame()
    } else {
        let userWin = true;
        if (userChoiceId === 'rock') {
            userWin = comp === 'paper' ? false : true;
        } else if (userChoiceId === 'scissor') {
            userWin = comp === 'rock' ? false : true;
        } else {
            userWin = comp === 'scissor' ? false : true;
        }
        showWinner(userWin, userChoiceId, comp)
    }

}

choices.forEach((chosing) => {

    chosing.addEventListener('click', () => {
        const userChoiceId = chosing.getAttribute("id")
        playGame(userChoiceId);
    })
})