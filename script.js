//WHILE round is not 5

//track score
//go to next round

//ELSE
//Announce winner and score

//generate random number from 1 to 3 (inclusive) for rock, paper and scissors
function computerSelection()
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
    //check for computer win
     //announce round winner
    else if (computer === "scissors" && user === "paper")
    {
        return `Computer wins, ${computer} beats ${user}`
    }
    else if (computer === "rock" && user === "scissors")
    {
        return `Computer wins, ${computer} beats ${user}`
    }
    else if (computer === "paper" && user === "rock")
    {
        return `Computer wins, ${computer} beats ${user}`
    }
    //if it's not a tie and the computer didn't win, the user wins
    else
    {
        return `You win, ${user} beats ${computer}`
    }
}

console.log(playRound(computerSelection(), userSelection()))
