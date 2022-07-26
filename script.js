let computerScore = 0; //Global scope is required, function scope doesn't pass on by invoking
let userScore = 0;
let winScore = 5;

const buttons = document.querySelectorAll('button');
const resultBoard = document.querySelector('#results');
const computerMove = document.querySelector(".computer-move");
const userMove = document.querySelector(".user-move");

buttons.forEach(button => button.addEventListener('click', (e) => {
    
    playRound(getComputerMove(computerMove),getUserMove(e), resultBoard);
    checkForWinner(resultBoard);
}));

function checkForWinner(resultBoard)
{
    if (userScore === winScore)
    {
        resultBoard.innerText = `You win the game by ${winScore} to ${computerScore}`
        return;
    }
    else if (computerScore === winScore)
    {
        resultBoard.innerText = `Computer wins the game by ${winScore} to ${userScore}`
        return;
    }
}
//generate random number from 1 to 3 (inclusive) for rock, paper and scissors
function getComputerMove(computerMove)
{
    let computerSelection = Math.floor(Math.random()*3 + 1);

    switch (computerSelection)
    {
        case 1:
            computerMove.setAttribute('src', './images/rockComp.png')
            return "rock";
        case 2:
            computerMove.setAttribute('src', './images/paperComp.png')
            return "paper";
        case 3:
            computerMove.setAttribute('src', './images/scissorsComp.png')
            return "scissors";
    }
}

//get user selection
function getUserMove(e)
{
    //get text from the event target
    let userSelection = e.target.innerText.toLowerCase();
    return userSelection;
}

//compare user selection and computer selection
function playRound(computer, user, resultBoard)
{
    //start a new game if someone has already reached 5 wins
    if (computerScore === winScore || userScore === winScore)
    {
        computerScore = 0;
        userScore = 0;
    }
    //check for tie first
    if (computer === user)
    {
        resultBoard.innerText = `It's a tie!
            Computer: ${computerScore} \n You: ${userScore}`
        return;
    }
    //check for winner
    //track score
    //announce round winner
    else if (computer === "scissors" && user === "paper")
    {
        computerScore++;
        resultBoard.innerText = `Computer wins the round! ${computer} beats ${user}
            Computer: ${computerScore} \n You: ${userScore}`;
        return;
    }
    else if (computer === "rock" && user === "scissors")
    {
        computerScore++;
        resultBoard.innerText = `Computer wins the round! ${computer} beats ${user}
            Computer: ${computerScore} \n You: ${userScore}`;
        return;
    }
    else if (computer === "paper" && user === "rock")
    {
        computerScore++;
        resultBoard.innerText = `Computer wins the round! ${computer} beats ${user}
            Computer: ${computerScore} \n You: ${userScore}`;
        return;
    }
    //if it's not a tie and the computer didn't win, the user wins
    else
    {
        userScore++;
        resultBoard.innerText = `You win the round! ${user} beats ${computer}
            Computer: ${computerScore} \n You: ${userScore}`;
        return;
    }
}