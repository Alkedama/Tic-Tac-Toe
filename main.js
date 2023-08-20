import "./style.scss";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Tic Tac Toe</h1>
  </div>
`;

("use strict");

const gameBoard = (() => {
  console.log("initiates gameBoard");
  let gameBoard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
})();

const displayController = (() => {
  console.log("initiates displayController");
})();

const player = () => {
  console.log("initiates player");
};


