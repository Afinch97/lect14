import './App.css';
import React, {useState} from 'react';

function Square() {
  const [value, setValue] = useState(null);
  
  return (
    <button className="square" onClick={() => value===null? setValue("X"):setValue(null)}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i) {
    const squares = squares.slice();
    squares[i] = 'X';
    setSquares(squares);
  }

  function renderSquare(i) {
    return <Square value={squares[i]}/>;
  }
  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}


export default Game;