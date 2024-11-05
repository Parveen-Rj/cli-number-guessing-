// Generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    // Get user's guess
    const userGuess = parseInt(document.getElementById('guessInput').value);

    // Check if user's guess is correct
    if (userGuess === randomNumber) {
        showMessage('Congratulations! You guessed the correct number.');
    } else if (userGuess < randomNumber) {
        showMessage('Too low! Try again.');
    } else {
        showMessage('Too high! Try again.');
    }
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}
