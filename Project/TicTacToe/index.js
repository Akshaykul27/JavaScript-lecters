let grids = document.getElementsByClassName('col')
currentTurnText = document.getElementById('current-turn-text')
let currentTurn = 1   // 1: player 1  2: player 2

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const singleMove = (index) =>{
    grids[index].innerText = currentTurn === 1 ? 'X' : 'O'
    let winningPlayer = checkWinningStatus()
    if(winningPlayer()){
        alert ()
    }
    currentTurn = currentTurn === 1 ? 2 : 1
    currentTurnText = 'Player ${currentTurn}' turn'
}


const checkWinningStatus = () => {
    for (let i = 0 ; i <  winningCombinations.length; i++){
        combination = winningCombinations[i]
        if(grids[combination[0]].innerText === grids[combination[1]].innerText && grids[combination[1]].innerText === grids[combination[2]].innerText && grids[combination[1]].innerText !== '') {
            return grids[combination[0]].innerText)
        }
    }
}

