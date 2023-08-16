import React from 'react'

function listInstructions(props) {
  return (
    <div>
    <ol>
<li>Decide who will be "X" and who will be "O." Player 1 typically plays as "X," and Player 2 plays as "O."</li>
<li>Players take turns making a move. Player 1 starts by placing their symbol ("X") in an empty cell on the grid.</li>
<li>Player 2 follows by placing their symbol ("O") in an empty cell.</li>
<li>The players continue alternating turns, placing their symbols in empty cells, until one player wins or the game ends in a draw.</li>
    </ol>
    </div>
  )
}

export default listInstructions