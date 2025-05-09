
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






