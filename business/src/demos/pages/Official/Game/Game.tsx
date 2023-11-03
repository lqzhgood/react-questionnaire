import React, { useState } from 'react';
import styles from './Game.module.sass';

type Chess = 'X' | 'O' | null;
type props = {
    value: Chess;
    clickHandler: () => void;
};

function Square({ value, clickHandler }: props) {
    return (
        <button className={styles.square} onClick={clickHandler}>
            {value}
        </button>
    );
}

type BoardType = {
    list: Chess[];
    isX: boolean;
    onPlay: (list: Chess[]) => void;
};
function Board({ list, isX, onPlay }: BoardType) {
    // const [list, setList] = useState(new Array(9).fill(null));
    const winner = calculateWinner(list);

    function handleClick(index: number) {
        if (list[index] || winner) return;

        const newList = [...list];
        const nextValue = isX ? 'X' : 'O';
        newList[index] = nextValue;

        onPlay(newList);
    }

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (isX ? 'X' : 'O');
    }

    return (
        <>
            {status}
            <div className='row'>
                <Square value={list[0]} clickHandler={() => handleClick(0)} />
                <Square value={list[1]} clickHandler={() => handleClick(1)} />
                <Square value={list[2]} clickHandler={() => handleClick(2)} />
            </div>
            <div className='row'>
                <Square value={list[3]} clickHandler={() => handleClick(3)} />
                <Square value={list[4]} clickHandler={() => handleClick(4)} />
                <Square value={list[5]} clickHandler={() => handleClick(5)} />
            </div>
            <div className='row'>
                <Square value={list[6]} clickHandler={() => handleClick(6)} />
                <Square value={list[7]} clickHandler={() => handleClick(7)} />
                <Square value={list[8]} clickHandler={() => handleClick(8)} />
            </div>
        </>
    );
}

function Game() {
    const [history, setHistory] = useState([new Array(9).fill(null)]);
    const [currIndex, setCurrIndex] = useState(0);

    const isX = currIndex % 2 === 0;
    const currentSquares = history[currIndex];

    function handlePlay(list: Chess[]) {
        const nextHistory = [...history.slice(0, currIndex + 1), list];
        setHistory(nextHistory);
        setCurrIndex(nextHistory.length - 1);
    }

    function jumpTo(i: number) {
        setCurrIndex(i);
    }

    const moves = history.map((list, i) => {
        let description;
        if (i > 0) {
            description = 'Go to move #' + i;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={i}>
                <button onClick={() => jumpTo(i)}>{description}</button>
            </li>
        );
    });

    return (
        <div className={styles['game']}>
            <div className={styles['board']}>
                <Board list={currentSquares} onPlay={handlePlay} isX={isX} />
            </div>
            <div className={styles['info']}>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}
export default Game;

function calculateWinner(squares: Chess[]) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
