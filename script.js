let computerScore = 0; //Global scope is required, function scope doesn't pass on by invoking
let userScore = 0;

const buttons = document.querySelectorAll('button');
const resultBoard = document.querySelector('#results');

buttons.forEach(button => button.addEventListener('click', (e) => {
    
    playRound(getComputerMove(),getUserMove(e), resultBoard);
}));

//generate random number from 1 to 3 (inclusive) for rock, paper and scissors
function getComputerMove()
{
    let computerSelection = Math.floor(Math.random()*3 + 1);

    switch (computerSelection)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
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