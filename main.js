("use strict");
import "./style.scss";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Tic Tac Toe</h1>
    <div class="board">
    <div class="cell">X</div>
    <div class="cell">O</div>
    <div class="cell">X</div>
    <div class="cell">O</div>
    <div class="cell">X</div>
    <div class="cell">O</div>
    <div class="cell">X</div>
    <div class="cell">O</div>
    <div class="cell">X</div>
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

  
});

// Represents a cell in the board
const Cell = () => {
  let value = "X";
  console.log("initiates Cell");
  return { value }
};

gameBoard();

const displayController = (() => {
  console.log("initiates displayController");
})();

const player = () => {
  console.log("initiates player");
};
