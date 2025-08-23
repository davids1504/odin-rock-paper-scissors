function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  return options[randomNumber];
}

console.log(getComputerChoice());
