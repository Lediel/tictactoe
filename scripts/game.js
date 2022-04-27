let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let gameover = false;
let playerWinner = '';
let count = 0

let symbols = ['x', 'o'];
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [0, 4, 8]
]

function handleMove(position) {

    if (gameover) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameover = isWin();

        if (gameover == false) {

            playerTime = (playerTime == 0) ? 1 : 0

        }
    }
    return gameover
}

function isWin() {
    for (let i = 0; i < winStates.length; i++) {

        let seq = winStates[i]

        let pos1 = seq[0];
        if (board[pos1] == '') {
            continue
        }
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3])
             {

            return true;
        }
    }
    return false
}


function resetGame(){
    let winner = document.querySelector(".winner")

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameover = false;
    winner.style.display = "none";
    count = 0;
}