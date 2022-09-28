class GameLogic {
    maxPossibleNumber
    #secretNumber
    playerMinNumber
    playerMaxNumber
    playerLives
    previousGuesses

    constructor() {
        this.maxPossibleNumber = 200
        this.secretNumber = 0
        this.playerMinNumber = 0
        this.playerMaxNumber = 0
        this.playerLives = 0
        this.previousGuesses = []
    }

    play(minNumber, maxNumber) {
        this.playerMinNumber = minNumber
        this.playerMaxNumber = maxNumber
        this.playerLives = Math.ceil((this.playerMaxNumber - this.playerMinNumber) / 4)
        this.secretNumber = this.generateSecretNumber()
    }

    checkGuess(guess) {
        if (guess == this.secretNumber) {
            return true
        }
        this.previousGuesses.push(guess)
        this.playerLives--
        return false
    }

    generateSecretNumber() {
        return Math.floor(Math.random() * (this.playerMaxNumber - this.playerMinNumber + 1) + this.playerMinNumber)
    }

    verifyNumbers(minNumber, maxNumber) {
        if (minNumber < 0 || maxNumber < 0) {
            alert("Please enter a positive number")
            return false
        }
        if (minNumber > this.maxPossibleNumber || maxNumber > this.maxPossibleNumber) {
            alert("Please enter a number less or equal to " + this.maxPossibleNumber)
            return false
        }
        if (minNumber > maxNumber) {
            console.log(minNumber, maxNumber)
            alert("Min number must be less than max number")
            return false
        }
        if (minNumber === maxNumber) {
            alert("Min number must be different than max number")
            return false
        }
        return true
    }
}