  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);

  function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      document.getElementById('result').innerHTML = 'Please enter a valid number between 1 and 100.';
      return;
    }

    if (guess === randomNumber) {
      document.getElementById('result').innerHTML = 'Congratulations! You guessed the correct number!';
    } else if (guess < randomNumber) {
      document.getElementById('result').innerHTML = 'Too low! Try guessing a higher number.';
    } else {
      document.getElementById('result').innerHTML = 'Too high! Try guessing a lower number.';
    }
  }