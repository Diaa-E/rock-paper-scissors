//WHILE round is not 5

//track score
//go to next round

//ELSE
//Announce winner and score

//generate random number from 1 to 3 (inclusive) for rock, paper and scissors
function computerSelection()
{
    let selection = Math.floor(Math.random()*3 + 1);

    switch (selection)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}
//sompare user selection and computer selection
//announce round winner