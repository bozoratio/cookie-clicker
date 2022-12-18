const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('result');

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (playerChoice === computerChoice) {
    result = 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  resultDiv.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

rockButton.addEventListener('click', () => play('rock'));
paperButton.addEventListener('click', () => play('paper'));
scissorsButton.addEventListener('click', () => play('scissors'));
