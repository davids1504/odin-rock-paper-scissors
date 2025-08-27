let humanScore = 0;
let computerScore = 0;
let isGameOver = false;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  return options[randomNumber];
}

function callPlayRound(evt) {
  let playerChoice = evt.target.textContent;

  playRound(playerChoice, getComputerChoice());
}

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((el) => {
  el.addEventListener("click", callPlayRound);
});

const resultPara = document.createElement("p");
let currentScore = document.createElement("p");
const gameInfo = document.querySelector(".game-info");

function playRound(humanChoice, computerChoice) {
  resultPara.remove();
  humanChoice = humanChoice.toLowerCase();
  resultPara.textContent = `You: ${humanChoice.toUpperCase()} ~ CPU: ${computerChoice.toUpperCase()}: `;

  function updateScore() {
    currentScore.textContent = `You: ${humanScore} ~ CPU: ${computerScore}`;
    declareWinner();
    if (isGameOver) {
      buttons.forEach((el) => {
        el.removeEventListener("click", callPlayRound);
      });
    }
  }

  function declareWinner() {
    if (humanScore === 5) {
      alert("GAME OVER! YOU WIN!\nPlease refresh page to play again.");
      isGameOver = true;
    } else if (computerScore === 5) {
      alert("GAME OVER! CPU WINS!\nPlease refresh page to play again.");
      isGameOver = true;
    }
  }

  updateScore();

  gameInfo.appendChild(resultPara);
  gameInfo.appendChild(currentScore);

  if (humanChoice === computerChoice) {
    resultPara.textContent += "It's a tie!";
    return;
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      resultPara.textContent += "You lose!";

      computerScore++;
      updateScore();
      return;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      resultPara.textContent += "You lose!";

      computerScore++;
      updateScore();
      return;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      resultPara.textContent += "You lose!";

      computerScore++;
      updateScore();
      return;
    }
  }
  resultPara.textContent += "You win!";

  humanScore++;
  updateScore();
}
