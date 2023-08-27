("use strict");
import "./style.scss";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Tic Tac Toe</h1>
    <div class="board">
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
  let cellDOM;
  let cellNumber = 0;

  const boardUI = document.querySelector(".board");

  // Adds 2d array
  // i represents rows
  // j represents columns
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {      
      cellDOM = document.createElement("button");
      cellDOM.classList.add("cell");
      cellDOM.id = cellNumber;
      cellNumber++;

      boardUI.appendChild(cellDOM);

      // board[i].push(cell());
      // if (j % 2 === 0) {
      //   board[i].push("X");
      // } else {
      //   board[i].push("O");
      // }
      // console.log(board[i]);
    }
  }

  return {
    board,
  };
};

// Represents a cell in the board
const cell = () => {
  let value;
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

const newMap = new Map();

newMap.set("a", "1");

console.log(newMap);

  const newBoard = gameBoard();

  // newBoard.board[0].push("X", "o");
  const map1 = newBoard.board.map((x) => x);

  console.log(map1);

  // console.log(newBoard);
  console.log(newBoard.board); 
  // console.log(newBoard.board[0]);
  // console.log(newBoard.board[0][0].value);

  const cell = document.querySelectorAll(".cell");
  let i = 0;
  let j = 0;
  cell.forEach((buttons) => {

    // Updates when button is clicked
    buttons.addEventListener("click", () => {
      console.log("clicked");
      // console.log(newBoard.board)
      buttons.textContent = "O";
    });
    buttons.textContent = "";

    // Updates Board
    const updateBoard = (() => {
      console.log("updateBoard");

      // if (newBoard.board[i][j] !== undefined) {
      //   // console.log(newBoard.board[i][j]);
      //   // buttons.textContent = newBoard.board[i][j];
      //   j++;
      // } else {
      //   i++;
      //   j = 0;
      //   // console.log(newBoard.board[i][j]);
      //   // buttons.textContent = newBoard.board[i][j];
      //   j++;
      // }

      // MAP
    })();
  });
})();

const playerOne = player("Player One");
const playerTwo = player("Player Two");

console.log(playerOne.players[0].name, playerOne.players[0].token);
console.log(playerTwo.players[1].name, playerTwo.players[1].token);
