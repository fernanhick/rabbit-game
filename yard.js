export const create_board = function (board_size) {
    let board_tiles = []
    for (let i = 0; i < board_size; i++) {
        for (let j = 0; j < board_size; j++) {
            board_tiles.push({
                x: i,
                y: j,
                isRabbit: false,
            })
        }
    }
    console.log(board_tiles)
}
