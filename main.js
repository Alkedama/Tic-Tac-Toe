("use strict");
import "./style.scss";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Tic Tac Toe</h1>
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
      board[i].push("X");
      console.log(board[i]);
    }
  }
})();

const Cell = (() => {
  console.log("initiates Cell");
})();

const displayController = (() => {
  console.log("initiates displayController");
})();

const player = () => {
  console.log("initiates player");
};