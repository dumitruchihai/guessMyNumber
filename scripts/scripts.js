function closeModal() {
    document.getElementById('modal').style.display = 'none'
}

window.onload = () => {
    start(0, 20)
}


function start(start, end) {
    const game = new GameLogic()

    const minNumber = document.getElementById('min_number').value
    const maxNumber = document.getElementById('max_number').value
    const numbersRange = document.getElementById('numbersRange')
    const wrongNumbers = document.getElementById('wrongNumbers')

    if (start || end) {
        game.play(start, end)
        closeModal()
    } else if (game.verifyNumbers(minNumber, maxNumber)) {
        game.play(minNumber, maxNumber)
        closeModal()
    }

    const numberGuess = document.getElementById('numberGuess')

    numberGuess.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            game.checkGuess(numberGuess.value)
            showLives(game.playerLives)
        }
    })

    showLives(game.playerLives)
    numbersRange.innerHTML = `${game.playerMinNumber} - ${game.playerMaxNumber}`
}

function showLives(lives) {
    const playerLives = document.getElementById('playerLives')
    playerLives.innerHTML = `<i class="fa-solid fa-heart"></i>`.repeat(lives)
}