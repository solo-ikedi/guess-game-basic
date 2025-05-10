
// Number between 1 and 100
const numberBtw0And1 = Math.random() 
const numberBtw0And100 = numberBtw0And1 * 100
const randomNumber = Math.floor(numberBtw0And100) + 1

const MAX_ATTEMPTS = 3
let attempt = 0

let guessHistory = []

console.log(numberBtw0And1)
console.log(numberBtw0And100)
console.log(randomNumber)

const guessButtonElement = document.getElementById('guessButton')
const titleElement = document.getElementById('title')
const messageElement = document.getElementById('message')
const hintElement = document.getElementById('hint')
const guessHistoryElement = document.getElementById('guess-history')

const checkIfAttemptsAreOver = () => {
    if (attempt >= MAX_ATTEMPTS) {
        console.log('You have reached the maximum number of attempts')
        return true
    }
    return false
}

const isEven = (number) => {
    return number % 2 === 0
}



guessButtonElement.addEventListener('click', () => {
    const guess = document.getElementById('guess').value
    console.log(guess)
    guessHistory.push(guess)
    hintElement.textContent = isEven(guess) ? 'Even' : 'Odd'
    guessHistoryElement.textContent = guessHistory.join(', ')


    attempt++;

    if (guess === randomNumber) {
        titleElement.textContent = "You're Correct"
        messageElement.textContent = `You guessed the number in ${attempt} attempts`
    } else {
        
        if (checkIfAttemptsAreOver()) {
            titleElement.textContent = "Game Over"
            messageElement.textContent = `You have reached the maximum number of attempts`
            return
        } else {
            titleElement.textContent = "Try again!"
            messageElement.textContent = `You have ${MAX_ATTEMPTS - attempt} attempts left`
        }
        
        
    }
})
// ✅ 1. Play Again / Reset
document.getElementById('resetButton').addEventListener('click', () => {
    attempt = 0;
    guessHistory = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;
    titleElement.textContent = 'Guess the Number';
    messageElement.textContent = 'Guess a number between 1 and 100';
    hintElement.textContent = '';
    guessHistoryElement.textContent = '';
    document.getElementById('guess').value = '';
});

//✅ 2. Remember Game State (Even After Refresh)

// Save state
localStorage.setItem('attempt', attempt);
localStorage.setItem('guessHistory', JSON.stringify(guessHistory));
localStorage.setItem('randomNumber', randomNumber);

// Restore state on load
window.onload = () => {
    if (localStorage.getItem('randomNumber')) {
        attempt = parseInt(localStorage.getItem('attempt')) || 0;
        guessHistory = JSON.parse(localStorage.getItem('guessHistory')) || [];
        randomNumber = parseInt(localStorage.getItem('randomNumber')) || randomNumber;

        guessHistoryElement.textContent = guessHistory.join(', ');
        messageElement.textContent = `You have ${MAX_ATTEMPTS - attempt} attempts left`;
    }
};

//✅ 2a. High Score

if (guess === randomNumber) {
    const highScore = localStorage.getItem('highScore');
    if (!highScore || attempt < highScore) {
        localStorage.setItem('highScore', attempt);
    }
}

//✅ 3. Difficulty Levels
document.getElementById('difficulty').addEventListener('change', (e) => {
    MAX_ATTEMPTS = parseInt(e.target.value);
});

//✅ 4. Hints
if (guess < randomNumber) {
    hintElement.textContent += ' | Too low';
} else if (guess > randomNumber) {
    hintElement.textContent += ' | Too high';
}

//✅ 5. Sound Effect

// Create audio elements
const gameOngoingSound = new Audio('sounds/game-ongoing.mp3');
const failureSound = new Audio('sounds/failure.wav');
const correctSound = new Audio('sounds/correct.mp3');
const gameOverSound = new Audio('sounds/game-over.flac');

// Set background loop
gameOngoingSound.loop = true;
gameOngoingSound.play();

// Resume background after short sounds end
failureSound.onended = () => {
    if (!checkIfAttemptsAreOver()) {
        gameOngoingSound.play();
    }
};

correctSound.onended = () => {
    // Don't resume background sound if player already won
};

gameOverSound.onended = () => {
    // No need to resume background after game is over
};

// Game logic
guessButtonElement.addEventListener('click', () => {
    const guess = parseInt(document.getElementById('guess').value);
    guessHistory.push(guess);
    hintElement.textContent = isEven(guess) ? 'Even' : 'Odd';
    guessHistoryElement.textContent = guessHistory.join(', ');

    attempt++;

    if (guess === randomNumber) {
        gameOngoingSound.pause();
        correctSound.play();

        titleElement.textContent = "You're Correct";
        messageElement.textContent = `You guessed the number in ${attempt} attempts`;
    } else {
        gameOngoingSound.pause(); // pause for now
        failureSound.play();

        if (checkIfAttemptsAreOver()) {
            gameOverSound.play();

            titleElement.textContent = "Game Over";
            messageElement.textContent = `You have reached the maximum number of attempts`;
        } else {
            titleElement.textContent = "Try again!";
            messageElement.textContent = `You have ${MAX_ATTEMPTS - attempt} attempts left`;
        }
    }
});

//CONTROL
let isPaused = false;

document.getElementById('pauseButton').addEventListener('click', () => {
    isPaused = !isPaused;

    if (isPaused) {
        gameOngoingSound.pause();
        guessButtonElement.disabled = true;
        document.getElementById('pauseButton').textContent = 'Resume';
    } else {
        gameOngoingSound.play();
        guessButtonElement.disabled = false;
        document.getElementById('pauseButton').textContent = 'Pause';
    }
});
