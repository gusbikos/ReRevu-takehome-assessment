// Create a 3x3 grid on the X & Y axis and randomize the numbers

const generateSquare = () => {
    const square = []
    for (let x = 0; x < 3; x++) {
        square[x] = []
        for (let y = 0; y < 3; y++) {
            // Make sure the center cell is set to 0 everything other cell is random

            const centerCell = square[x][1] = 0
            square[x][y] = Number(Math.random() < 0.5)
        }
    }
    return square
}

// Take the square object that was created in the previous function and flatten it into a single array to compare elements much easier.

const countCells = (square) => {
    let count = 0
    const flattened = square.flat()


    for (let i = 1; i < flattened.length; i++) {
        if ( flattened[i] == 0) {
            // If the number at that index = 0 which is what the center cell is then we increment the counter + 1
            count++
        }
    }    
    return count
}

const square = generateSquare()
console.table(square) // Create a visual table in the console
console.log(countCells(square))

