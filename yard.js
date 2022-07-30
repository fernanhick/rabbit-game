export const TILE_STATUSES = {
    HIDDEN: 'hidden',
    RABBIT: 'rabbit',
    NUMBER: 'number',
    MARKED: 'marked',
}

export function createBoard(boardSize, numberOfRabbits) {
    let board = []
    for (let x = 0; x < boardSize; x++) {
        const row = []
        for (let y = 0; y < boardSize; y++) {
            const element = document.createElement('div')
            element.dataset.status = TILE_STATUSES.HIDDEN

            const tile = {
                element,
                x,
                y,

                get status() {
                    return this.element.dataset.status
                },
                set status(value) {
                    this.element.dataset.status = value
                },
            }

            row.push(tile)
        }
        board.push(row)
    }
    console.log(board)
    return board
}
