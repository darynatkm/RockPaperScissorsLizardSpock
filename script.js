let scores = {
    computerScore: 0,
    playerScore: 0
}

const computerChoices = ['paper', 'spock', 'lizard', 'rock', 'scissors']

const wins = { scissors: {
            
                paper: 0, 
                spock: 1,
                lizard: 0,
                rock: 1,
                scissors: 2
            },
            paper: {
                scissors: 1, 
                spock: 0,
                lizard: 1,
                rock: 0,
                paper: 2
            },
            rock: {
                scissors: 0, 
                spock: 1,
                lizard: 0,
                paper: 1,
                rock: 2
            },
            lizard: {
                scissors: 1, 
                spock: 0,
                rock: 1,
                paper: 0,
                lizard: 2
            },
            spock: {
                scissors: 0, 
                spock: 2,
                rock: 0,
                paper: 1,
                lizard: 1
            }  
}

const resetAll = () => {

    scores.computerScore = 0;
    scores.playerScore = 0;
    updateScores();
    document.getElementById('result').innerHTML = '';
    resetChoicesColorsAndTitles();
    
}


const select = (playerChoice) => {

    resetChoicesColorsAndTitles();
    //get computer random function
    let computerChoice = getComputerChoice();

    //change color of selected choices and titles
    document.querySelector('#computer div #computer'+ computerChoice).style.color = 'black';
    document.querySelector('#player div #player' + playerChoice).style.color = 'black';
    document.getElementById('computerChoice').innerHTML = `--${computerChoice}`;
    document.getElementById('playerChoice').innerHTML = `--${playerChoice}`;

    // Update result
    document.getElementById('result').innerHTML = checkWin(playerChoice, computerChoice);
    updateScores();
}


const getComputerChoice = () => {

    return computerChoices[Math.floor(Math.random() * 5)]

}

const resetChoicesColorsAndTitles = () => {
    document.querySelectorAll('#computer div i').forEach(function (elem) {
        elem.style.color ='rgb(235, 43, 52)';
    });
    document.querySelectorAll('#player div i').forEach(function (elem) {
        elem.style.color ='dodgerblue';
    });
    document.getElementById('computerChoice').innerHTML = ''
    document.getElementById('playerChoice').innerHTML = ''
}

const checkWin = (playerChoice, computerChoice) => {

    let message;
    if (wins[playerChoice][computerChoice] == 0 ) {
        message = "You Won!"
        scores.playerScore ++;
    }
    else if (wins[playerChoice][computerChoice]== 1) {
        message = "You Lost!"
        scores.computerScore ++;
    }
    else if (wins[playerChoice][computerChoice] == 2) {
        message = "Drew!"
    }
    return message;
}
const updateScores = () => {

    document.getElementById('playerScore').innerHTML = scores.playerScore;
    document.getElementById('computerScore').innerHTML = scores.computerScore;
}