let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    const values = ["rock", "paper", "scissors"];
    return values[Math.floor(Math.random() * values.length)];
}

function getHumanChoice()
{
    const choice = prompt("Choose between rock, paper or scissors!").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice){
        console.log(`${humanChoice} vs ${computerChoice}, Draw!`);
        return;
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock"))
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }  
}

function playGame(){

    for (i=0;i<5;i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore)
    {
        console.log(`You win!: ${humanScore} to ${computerScore}`);
    }
    else if (computerScore > humanScore)
    {
        console.log(`You lose!: ${computerScore} to ${humanScore}`);
    }else{
        console.log(`Draw!: ${computerScore} to ${humanScore}`);
    }
}


