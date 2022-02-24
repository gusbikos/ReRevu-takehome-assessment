const generateSquare = () => {
    const square = []
    for (let x = 0; x < 3; x++) {
        square[x] = []
        for (let y = 0; y < 3; y++) {
            const centerCell = square[x][1] = 0
            square[x][y] = Number(Math.random() < 0.5)
        }
    }
    return square
}

const countCells = (square) => {
    let count = 0
    const flattened = square.flat()

    for (let i = 1; i < flattened.length; i++) {
        if ( flattened[i] == 0) {
            count++
        }
    }    
    return count
}

const square = generateSquare()
console.table(square)
console.log(countCells(square))

