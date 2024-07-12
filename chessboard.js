// Function to create a chessboard with pieces
function createChessboard(rows, cols) {
    const boardContainer = document.getElementById('chessboard-container');
    const pieces = [
        '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖', // Black pieces (top row)
        '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙', // Black pawns (second row)
        '', '', '', '', '', '', '', '', // Empty rows (3rd to 6th)
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', // Empty rows (3rd to 6th)
        '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟', // White pawns (7th row)
        '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'  // White pieces (bottom row)
    ];

    // Loop through rows
    for (let i = 0; i < rows; i++) {
        // Loop through columns
        for (let j = 0; j < cols; j++) {
            // Create a square element
            const square = document.createElement('div');
            square.className = (i + j) % 2 === 0 ? 'square light' : 'square dark'; // Alternate colors
            square.textContent = ''; // Initialize text content
            
            // Add pieces to appropriate squares
            const pieceIndex = i * cols + j;
            if (pieces[pieceIndex]) {
                const piece = document.createElement('span');
                piece.textContent = pieces[pieceIndex];
                piece.className = 'piece';
                square.appendChild(piece);
            }
            
            // Append square to the board container
            boardContainer.appendChild(square);
        }
    }
}

// Call the function with desired rows and columns
createChessboard(8, 8); // This will create an 8x8 chessboard with pieces
