("use strict");
import "./style.scss";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Tic Tac Toe</h1>
    <div class="board">
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    </div>
    <div id="target"></div>
  </div>
`;

// Initiates Game Board
const gameBoard = () => {
  console.log("initiates gameBoard");
  const rows = 3;
  const cols = 3;
  const board = [];

  // Adds 2d array
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      // board[i].push(cell());
      if (j % 2 === 0) {
        board[i].push("X");
      } else {
        board[i].push("O");
      }
      // console.log(board[i]);
    }
  }

  return {
    board,
  };
};

// Represents a cell in the board
const cell = () => {
  let value = "X";
  console.log("initiates Cell");
  return { value };
};

// Declare Players
const player = (name) => {
  console.log("initiates player");

  const players = [
    {
      name: name,
      token: "X",
    },
    {
      name: name,
      token: "O",
    },
  ];

  return { players: players };
};

// Display in DOM
const displayController = (() => {
  console.log("initiates displayController");

  const newBoard = gameBoard();

  // console.log(newBoard.board);
  // console.log(newBoard.board[0]);
  // console.log(newBoard.board[0][0].value);

  const cell = document.querySelectorAll(".cell");
  let i = 0;
  let j = 0;
  cell.forEach((buttons) => {
    const cellButton = document.createElement("button");

    // Updates when button is clicked
    buttons.addEventListener("click", () => {
      console.log("clicked");
      buttons.textContent = "O";
    });
    buttons.textContent = i;

    // Updates Board
    const updateBoard = (() => {
      console.log("updateBoard");

      if (newBoard.board[i][j] !== undefined) {
        console.log(newBoard.board[i][j]);
        buttons.textContent = newBoard.board[i][j];
        j++;
      } else {
        i++;
        j = 0;
        console.log(newBoard.board[i][j]);
        buttons.textContent = newBoard.board[i][j];
        j++;
      }


      // MAP
    })();
  });
})();

const playerOne = player("Player One");
const playerTwo = player("Player Two");

console.log(playerOne.players[0].name, playerOne.players[0].token);
console.log(playerTwo.players[1].name, playerTwo.players[1].token);
