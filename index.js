const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

// Scorecard
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

const updateScores = (player, opponent) => {
  if (!isGameOver) {
    player.score++;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      // Adding Bulma Css event to disable buttons
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
};
// Button Events
p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

const reset = () => {
  p1.score = 0;
  p2.score = 0;
  isGameOver = false;
  p1.display.textContent = p1.score;
  p2.display.textContent = p2.score;
  p1.display.classList.remove("has-text-success", "has-text-danger");
  p2.display.classList.remove("has-text-success", "has-text-danger");
  //Removing the Bulma disabled feature when game is reset
  p1.button.disabled = false;
  p2.button.disabled = false;
};

resetButton.addEventListener("click", reset);

// When value of the winning score changes
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  // Reset the game whhen the select value changes
  reset();
});
