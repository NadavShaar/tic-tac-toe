function useCalcWinner(board) {
    const winningConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
    ];

    let xArray = [], oArray = [];
    board.forEach((b, idx) => {
        if(b && b.indexOf('X') !== -1) xArray.push(idx);
        else if(b && b.indexOf('O') !== -1) oArray.push(idx);
    });

    for(var i=0; i < winningConditions.length; i++) {
        if(winningConditions[i].every(cv => xArray.indexOf(cv) >= 0)) return 'X';
        else if(winningConditions[i].every(cv => oArray.indexOf(cv) >= 0)) return 'O';
    }

    if(xArray.length + oArray.length === 9) return 'none';
    
    return null;
}

export default useCalcWinner;