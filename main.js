("use strict");
import "./style.scss";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Tic Tac Toe</h1>
    <div class="board">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    </div>
    <div id="target"></div>
  </div>
`;

// Initiates Game Board
const gameBoard = (() => {
  console.log("initiates gameBoard");
  const rows = 3;
  const cols = 3;
  const board = [];

  // Adds 2d array
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      board[i].push(Cell());
      console.log(board[i]);
    }
  }
  
});

// Represents a cell in the board
const Cell = () => {
  let value = "X";
  console.log("initiates Cell");
  return { value }
};

// Declare Players
const player = (name) => {
  console.log("initiates player");

  const players = [{
    name: name,
    token: "X"
  },
  {
    name: name,
    token: "O"
  }]

return { players: players }
};

// Display in DOM
const displayController = (() => {
  console.log("initiates displayController");

  const board = gameBoard();

  const cell = document.querySelectorAll(".cell");
  let i = 0;
  cell.forEach(buttons => {
    const cellButton = document.createElement("button");
    buttons.appendChild(cellButton);

    cellButton.addEventListener("click", () => {
      console.log("clicked");
      cellButton.textContent = "X";
    })
    cellButton.textContent = i;
    i++;
  });
})();

const playerOne = player("Player One");
const playerTwo = player("Player Two");

console.log(playerOne.players[0].name, playerOne.players[0].token);
console.log(playerTwo.players[1].name, playerTwo.players[1].token);