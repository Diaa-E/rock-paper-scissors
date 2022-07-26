let computerScore = 0; //Global scope is required, function scope doesn't pass on by invoking
let userScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', (e) => {
    
    console.log(playRound(getComputerMove(), e.target.innerText.toLowerCase()))
    //console.log(e.target.innerText);
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
function userSelection()
{
    let userSelection;

    //reject invalid inputs
    do
    {
        userSelection = prompt("Please choose Rock, Paper or Scissors");
        userSelection = userSelection.toLowerCase();

    } while(userSelection != "rock" && userSelection != "paper" && userSelection != "scissors")

    return userSelection;
}

//compare user selection and computer selection
function playRound(computer, user)
{
    //check for tie first
    if (computer === user)
    {
        return "It's a tie"
    }
    //check for winner
    //track score
    //announce round winner
    else if (computer === "scissors" && user === "paper")
    {
        computerScore++;
        return `Computer wins, ${computer} beats ${user}`
    }
    else if (computer === "rock" && user === "scissors")
    {
        computerScore++;
        return `Computer wins, ${computer} beats ${user}`
    }
    else if (computer === "paper" && user === "rock")
    {
        computerScore++;
        return `Computer wins, ${computer} beats ${user}`
    }
    //if it's not a tie and the computer didn't win, the user wins
    else
    {
        userScore++;
        return `You win, ${user} beats ${computer}`
    }
}