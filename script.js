function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  return options[randomNumber];
}

function getHumanChoice() {
  return prompt("Rock, paper, or scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log(humanChoice);
  console.log(computerChoice);
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    return;
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You lose!");
      computerScore++;
      return;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("You lose!");
      computerScore++;
      return;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You lose!");
      computerScore++;
      return;
    }
  }
  console.log("You win!");
  humanScore++;
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }
}

playGame();
