function closeModal() {
    document.getElementById('modal').style.display = 'none'
}

function start(start, end) {
    const game = new GameLogic()

    const minNumber = document.getElementById('min_number').value
    const maxNumber = document.getElementById('max_number').value
    const numbersRange = document.getElementById('numbersRange')
    const wrongNumbers = document.getElementById('wrongNumbers')
    const helpMessage = document.getElementById('helpMessage')

    if (start || end) {
        game.play(start, end)
        closeModal()
    } else if (game.verifyNumbers(parseInt(minNumber), parseInt(maxNumber))) {
        game.play(parseInt(minNumber), parseInt(maxNumber))
        closeModal()
    }

    const numberGuess = document.getElementById('numberGuess')

    numberGuess.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (numberGuess.value) {
                if (game.checkGuess(numberGuess.value)) {
                    alert('You won, the number was ' + game.secretNumber)
                    location.reload()
                }
                helpMessage.innerHTML = game.previousGuesses[game.previousGuesses.length - 1] > game.secretNumber ? 'Too high' : 'Too low'
                showLives(game.playerLives)
                wrongNumbers.innerHTML = game.previousGuesses.join(', ')
                numberGuess.value = ''
                if (game.playerLives === 0) {
                    alert('You lost, the number was ' + game.secretNumber)
                    location.reload()
                }
            }
        }
    })

    showLives(game.playerLives)
    numbersRange.innerHTML = `${game.playerMinNumber} - ${game.playerMaxNumber}`
}

function showLives(lives) {
    const playerLives = document.getElementById('playerLives')
    playerLives.innerHTML = `<i class="fa-solid fa-heart"></i>`.repeat(lives)
}