class Game{
    // 1 build the constructor
    //1a access DOM elements
    constructor(){
        this.gameRestartBtn = document.getElementById('gameRestart')
        this.submitBtn = document.getElementById('submitBtn')
        this.gameStatus = document.getElementById('gameStatus')
        this.gameActive = true
        this.currentPlayer = 'X'
        this.xWins = document.getElementById('xWins')
        this.oWins = document.getElementById('oWins')
        this.playerOne = document.getElementById('playerOne')
        this.playerTwo = document.getElementById('playerTwo')

        //1b set win count
        this.winCount = {
            x: 0,
            o: 0
        }

        //1c set game state
        this.gameState = [
            '', '', '',
            '', '', '',
            '', '', ''
        ]

        //1d set winningConditions
        this.winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5 ,8],
            [0, 4, 8],
            [2, 4 ,6]
        ]
        //1e set players
        this.players = {
            player1 : 'Player 1',
            player2 : 'Player 2'
        }
    }

    //2 initializer
    init(){
        //setting player text
        this.playerOne.innerText = this.players.player1
        this.playerTwo.innerText = this.players.player2
        this,this.handleCellClicked()
    }

    //3 handle clicked cell
    handleCellClicked(){
        //grab cell
        const cells = document.querySelectorAll('.cell')

        cells.forEach(cell => {
            const cellIdx = parseInt(cell.getAttribute('data-cell-index'))
            //if the cell index is not an empty string or if game active is false
            cell.addEventListener('click', ()=> {
                // console.log(cellIdx)
                if (this.gameState[cellIdx] != ''|| !this.gameActive) {
                    return
                }

                this.handleCellPlayed(cell, cellIdx)
            })
        })
    }

    //4 handle when a  cell played
    handleCellPlayed(cell, idx) {
        // console.log(cell ,idx)
        this.gameState[idx] = this.currentPlayer
        this.currentPlayer == 'X' ? cell.classList.add('red') : cell.classList.add('blue')


        //DECLARATIVE
        // if (this.currentPlayer == 'X') {
        //     cell.classList.add('red')
        // } else {
        //     cell.classList.add('blue')
        // }
        cell.innerText = this.currentPlayer
    }

    //5 resultValidation
    resultValidation(){
        let gameWon = false

        for(let i = 0; i <= 7; i++){
            const win = this.winningConditions[i]
            //i = 0 > win == [0, 1, 2]

            let a = this.gameState[win[0]]
            let b = this.gameState[win[1]]
            let c = this.gameState[win[2]]

            if(a == '' || b == '' || c == ''){
                continue
            }

            if(a == b && b == c ){
                gameWon = true
                break
            }
        }
    }
}

const action = new Game()
action.init()