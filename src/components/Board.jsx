import React, { useState } from 'react';
import useCalcWinner from '../hooks/useCalcWinner'

const styles = {
    container: {
        display: 'inline-flex', 
        flexDirection: 'column',
        padding: 20,
        background: '#fff',
        borderRadius: 4,
        boxShadow: 'rgba(0, 0, 0, 0.2) 1px 6px 9px 3px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    status: {
        fontSize: 30,
        fontWeight: 700,
        background: '#E91E63',
        marginBottom: 20,
        color: '#fff',
        borderRadius: 4,
        lineHeight: '32PX',
        paddingBottom: 6,
        paddingTop: 4,
        textAlign: 'center'
    },
    board: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 80px)',
        gridTemplateRows: 'repeat(3, 80px)',
        gridGap: '2px',
        borderRadius: 4,
        overflow: 'hidden'
    },
    sqr: {
        background: '#606e79',
        display: 'inline-flex', 
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 70,
        paddingBottom: 10
    },
    button: {
        marginTop: 20,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        padding: 10,
        borderRadius: 4,
        color: '#fff',
        fontSize: 16,
        background: '#00BCD4',
        fontWeight: 700
    },
    title: {
        position: 'absolute',
        top: -90,
        left: 0,
        right: 0,
        color: '#FFEB3B',
        fontSize: 54,
        fontWeight: 700
    }
}

function Board(props) {
    const [board, setBoard] = useState([...Array(9).fill(null)]);
    const [xIsNext, setXisNext] = useState(true);

    const winner = useCalcWinner(board);
    
    const handleClick = (index) => {
        let boardClone = [...board];
        if(boardClone[index] || winner) return;

        boardClone[index] = xIsNext ? 'X' : 'O';
        
        setBoard(boardClone);
        setXisNext(!xIsNext);
    }

    const clearBoard = () => {
        setBoard([...Array(9).fill(null)]);
        setXisNext(true);
    }

    return (
        <div style={styles.container}>
            <span style={styles.title}>Tic Tac Toe</span>
            <span style={styles.status}>
                {
                    (winner && winner === 'X') ? 
                        'X - WON!' 
                        : 
                        (winner && winner === 'O') ? 
                            'O - WON!' 
                            : 
                            xIsNext ? 
                                'X - Turn' 
                                : 
                                'O - Turn'
                }
            </span>
            <div style={styles.board}>
                { board.map((value, idx) => <div key={idx} onClick={e => handleClick(idx)} style={{...styles.sqr, cursor: winner ? 'not-allowed' : 'pointer'}}><span style={{lineHeight: '90px', userSelect: 'none', color: value === 'X' ? '#ff8862' : '#73e278'}}>{value}</span></div>) }
            </div>
            <button style={styles.button} onClick={clearBoard}>Restart</button>
        </div>
    )
}

export default Board;