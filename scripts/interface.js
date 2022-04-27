document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    let square = event.target
    let position = square.id

    handleMove(position);
    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
    count++
    let winner = document.querySelector(".winner")
    let reset = document.querySelector('#reset')

    playerWinner = (playerTime == 0) ? "jogador X" : "jogador O";

    if (gameover) {
        winner.textContent = `${playerWinner} venceu! 🎉`;
        winner.style.display = "block";
        reset.textContent = "Jogar Novamente";
        count = 0;
    }
    if (count == 9 && !gameover){
        winner.textContent = "Que pena, empatou!!";
        winner.style.display = "block";
        reset.textContent = "Jogar Novamente";
        count = 0;
    }
}

reset.addEventListener("click", () => {

    let winner = document.querySelector(".winner")
    let reset = document.querySelector('#reset')
    let squares = document.querySelectorAll('.square')

    resetGame();

    winner.textContent = ''
    reset.textContent = 'Recomeçar'

    squares.forEach((square) => {
        square.innerHTML = ''
    }
    )
})
