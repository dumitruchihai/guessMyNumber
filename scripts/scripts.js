function closeModal() {
    document.getElementById('modal').style.display = 'none'
}

function start() {
    const game = new GameLogic()

    const minNumber = document.getElementById('min_number').value
    const maxNumber = document.getElementById('max_number').value

    if (game.verifyNumbers(minNumber, maxNumber)) {
        game.play(minNumber, maxNumber)
        closeModal()
    }
}

function startDefault() {
    const game = new GameLogic()

    game.play(0, 20)
    closeModal()
}