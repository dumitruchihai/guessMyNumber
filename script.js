class Game {
  #solution = 0;
  remainingAttempts = 5;
  guessList = [];
  generateSolution() {
    this.#solution = Math.floor(Math.random() * 20) + 1;
  }
  addGuess(guess) {
    this.guessList.push(guess.getValue());
  }
  checkGuess(guess) {
    let guessValue = guess.getValue();
    this.remainingAttempts -= 1;
    if (this.remainingAttempts > 0) {
      if (guessValue === this.#solution) {
        message.innerHTML = `You won. Number was ${this.#solution}`;
        checkButton.disabled = true;
        input.disabled = true;
        restartButton.classList.remove("disable");
      } else {
        const condition = guessValue > this.#solution ? "less" : "greater";
        message.innerHTML = `The random number is ${condition} than ${guessValue}. You have ${this.remainingAttempts} more attempts`;
      }
    } else {
      message.innerHTML = `You lost. Number was ${this.#solution}`;
      checkButton.disabled = true;
      input.disabled = true;
      restartButton.classList.remove("disable");
    }
    input.value = "";
    guesses.innerHTML = this.guessList.toString();
  }
  restartGame() {
    guesses.innerHTML = "";
    this.remainingAttempts = 5;
    startButton.classList.remove("disable");
    userGuesses.classList.add("disable");
    message.innerHTML = "Click 'Start' when you are ready";
    this.generateSolution();
  }
}

class Guess {
  #value = 0;
  setValue(inputValue) {
    this.#value = parseInt(inputValue);
  }
  getValue() {
    return this.#value;
  }
}

const startButton = document.getElementById("start");
const checkButton = document.getElementById("check");
const restartButton = document.getElementById("restart");
const input = document.getElementById("guess");
const form = document.getElementById("form");
let message = document.getElementById("message");
let userGuesses = document.querySelector(".userGuesses");
let guesses = document.querySelector(".guesses");
let game;

form.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    const value = input.value;
    if (value < 20 && value > 0) {
      const guess = new Guess();
      guess.setValue(value);
      game.addGuess(guess);
      game.checkGuess(guess);
    }
  }
});

startButton.addEventListener("click", () => {
  game = new Game();
  game.generateSolution();
  message.innerHTML = "You have 5 attempts";
  startButton.classList.add("disable");
  input.disabled = false;
  checkButton.disabled = false;
  userGuesses.classList.remove("disable");
});

checkButton.addEventListener("click", () => {
  const value = input.value;
  const guess = new Guess();
  guess.setValue(value);
  game.addGuess(guess);
  game.checkGuess(guess);
});

function validateInput() {
  const inputValue = input.value;
  checkButton.disabled = inputValue > 20 || inputValue < 0;
}

restartButton.addEventListener("click", () => {
  game.restartGame();
  restartButton.classList.add("disable");
});

// else if (guessValue > this.#solution) {
//   const condition = guessValue > this.#solution ? 'less' : 'greater'
//   message.innerHTML = `The random number is ${condition} than ${guessValue}. You have ${this.remainingAttempts} more attempts`;
// } else {
//   message.innerHTML = `The random number is greater than ${guessValue}. You have ${this.remainingAttempts} more attempts`;
// }
