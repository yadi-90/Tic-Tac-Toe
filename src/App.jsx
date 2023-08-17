import React from 'react';
import ListInstructions from './components/listInstructions';
import './App.css';
import Cell from './components/Cell';
import { useState,useEffect } from 'react';

function App() {
    // State to manage the current state of the cells in the game.
  const[cells, setCells]= useState(["","","","","","","","","",])


    // State to manage the current state of the cells in the game.
  const[go,setGo] = useState("circle")

   // State to hold the winning message.
  const[winningMessage, setWinningMessage] = useState(null)

   // Message indicating whose turn it is.
  const message = "It is now "+ go + " 's turn. "

    // Function to check if there's a winning combination.
  const checkScores = () => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    let circleWins = false;
    let crossWins = false;
  
        // Loop through each winning combination to check for a win.
    winningCombos.forEach(array => {
      if (array.every(cell => cells[cell] === "circle")) {
        circleWins = true;
      }
      if (array.every(cell => cells[cell] === "cross")) {
        crossWins = true;
      }
    });
  

        // Update the winning message based on the outcome.
    if (circleWins) {
      setWinningMessage("Circle Wins!");
    } else if (crossWins) {
      setWinningMessage("Cross Wins!");
    }
  };


    // UseEffect hook to check for wins whenever cells are updated.
  useEffect(() => {
    checkScores(); 
  }, [cells]);
  
  
  return (
    <div className="App">
      <h1 className="Title"> Tic Tac Toe Game</h1>
      <p>Tic Tac Toe, also known as "Noughts and Crosses," is a two-player game where 
        the objective is to be the first to get three of your own symbols in a row,
         either horizontally, vertically, or diagonally, on a 3x3 grid.</p>
         <div className="gameBoard">
        {cells.map((cell, index) =>
        <Cell 
        key={index} 
        id={index} 
        cell={cell} 
        setCells={setCells}
        go = {go} 
        setGo={setGo}
        cells={cells}
        winningMessage={winningMessage}
        />)}
      </div> 
        <p>{winningMessage || message}</p>
         <h2>Instructions</h2>
         <ListInstructions />

    </div>
  );
}


export default App
