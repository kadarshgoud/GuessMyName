'use strict';

//functions for all DOM elements and generating secret code

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayHighScore = function (highscore) {
  document.querySelector('.highscore').textContent = highScore;
};

const bodyBackgroundColor = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

const widthofGuessMyNumber = function (width) {
  document.querySelector('.number').style.width = width;
};

const generateSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = generateSecretNumber();
console.log(secretNumber);

let score = 20;
let highScore = 0;

// high score
if (highScore === 0) {
  highScore = highScore;
} else if (highScore >= score) {
  highScore = highScore;
} else if (highScore < score) {
  highScore = score;
}

console.log(highScore);

// button event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (guess > 0 && guess < 21) {
    if (!guess) {
      displayMessage('🛑 No Number!');
      // player wins
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      // CSS editing for background color and text box width
      bodyBackgroundColor('#60b347');
      widthofGuessMyNumber('30rem');
      // show number to user
      displayNumber(secretNumber);

      // high score
      if (highScore >= score) {
        displayHighScore(highScore);
      } else if (highScore < score) {
        highScore = score;
        displayHighScore(highScore);
      }
    } else if (guess !== secretNumber) {
      if (score <= 0) {
        displayMessage('You Lost!!');
        score = 0;
        displayScore(score);
      } else {
        displayMessage(
          guess < secretNumber ? '☝ Try Higher!!' : '👇 Try Lower!!'
        );
        score = score - 1;
        displayScore(score);
      }
    } else {
      displayMessage('Enter between 1 and 20!');
      displayScore(score);
    }
  } else {
    displayMessage('Enter numbers between 1 to 20');
    displayScore(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();
  //console.log(secretNumber);
  displayScore(score);
  displayMessage('Start guessing...');
  bodyBackgroundColor('#222');
  widthofGuessMyNumber('15rem');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayHighScore(highScore);
});
