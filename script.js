const totalScore = { playerScore: 0, computerScore: 0 };

const getComputerChoice = () => {
  let computerChoiceArray = ["Rock", "Paper", "Scissors"];
  let computerChoice = computerChoiceArray[Math.floor(Math.random() * 3)];
  return computerChoice;
};

const getResult = (playerChoice, computerChoice) => {
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
};

const showResult = (score, playerChoice, computerChoice) => {
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  if (score == -1) {
    resultDiv.innerText = "You Lose";
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie";
  } else {
    resultDiv.innerText = "You Won";
  }

  handsDiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
  playerScoreDiv.innerText = `Your Score: ${totalScore["playerScore"]}`;
};

const onClickRPS = (playerChoice) => {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  console.log({ score });
  totalScore["playerScore"] += score;
  //   totalScore["computerScore"] += score;
  console.log(totalScore);
  showResult(score, playerChoice, computerChoice);
};

const playGame = () => {
  const choices = document.getElementsByClassName("rpsButton");
  console.log(Array.from(choices));
  Array.from(choices).forEach((choice) => {
    choice.onclick = () => {
      onClickRPS(choice.value);
    };
  });

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => {
    endGame(totalScore);
  };
};

const endGame = (totalScore) => {
  totalScore["playerScore"] = 0;
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  resultDiv.innerText = "";
  handsDiv.innerText = "";
  playerScoreDiv.innerText = "";
};

playGame();
