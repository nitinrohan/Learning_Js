'use strict';
/*
console.log(document.querySelector('.message').textContent); //gives the text content of the element

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number';
    displayMessage('⛔ No number');
  }
  // when player wins
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😒 You lost the game!';
      displayMessage('😒 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // // when you're close
  // else if (guess === secretNumber + 1) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'CLOSE!!!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😒 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // // when the guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😒 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // // when you're close
  // else if (guess === secretNumber - 1) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'CLOSE!!!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😒 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  // // when the guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😒 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
}); //addEventListener(event, eventHandler)

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
