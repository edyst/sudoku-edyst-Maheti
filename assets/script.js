"use strict";

for (let i = 3; i <= 81; i = i + 3) {
  if (i % 9 !== 0) {
    document.getElementById(`cell-${i}`).classList.add("middle-border");
  }
}
for (let i = 19; i <= 54; i++) {
  if (i === 28) i = 46;
  document.getElementById(`cell-${i}`).classList.add("middle-bottom-border");
}

// boards
const easyBoard = [
  [1, 0, 0, 4, 8, 9, 0, 0, 6],
  [7, 3, 0, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 0, 0, 1, 2, 9, 5],
  [0, 0, 7, 1, 2, 0, 6, 0, 0],
  [5, 0, 0, 7, 0, 3, 0, 0, 8],
  [0, 0, 6, 0, 9, 5, 7, 0, 0],
  [9, 1, 4, 6, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 3, 7],
  [8, 0, 0, 5, 1, 2, 0, 0, 4],
];
const mediumBoard = [
  [0, 2, 0, 6, 0, 8, 0, 0, 0],
  [5, 8, 0, 0, 0, 9, 7, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 0],
  [3, 7, 0, 0, 0, 0, 5, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 8, 0, 0, 0, 0, 1, 3],
  [0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 9, 8, 0, 0, 0, 3, 6],
  [0, 0, 0, 3, 0, 6, 0, 9, 0],
];
const hardBoard = [
  [0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 6, 0, 0, 0, 0, 3],
  [0, 7, 4, 0, 8, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 2],
  [0, 8, 0, 0, 4, 0, 0, 1, 0],
  [6, 0, 0, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 7, 8, 0],
  [5, 0, 0, 0, 0, 9, 0, 0, 0],
  [8, 0, 0, 0, 0, 0, 0, 4, 0],
];

// solutions
const easySolution = [
  [1, 5, 2, 4, 8, 9, 3, 7, 6],
  [7, 3, 9, 2, 5, 6, 8, 4, 1],
  [4, 6, 8, 3, 7, 1, 2, 9, 5],
  [3, 8, 7, 1, 2, 4, 6, 5, 9],
  [5, 9, 1, 7, 6, 3, 4, 2, 8],
  [2, 4, 6, 8, 9, 5, 7, 1, 3],
  [9, 1, 4, 6, 3, 7, 5, 8, 2],
  [6, 2, 5, 9, 4, 8, 1, 3, 7],
  [8, 7, 3, 5, 1, 2, 9, 6, 4],
];
const mediumSolution = [
  [1, 2, 3, 6, 7, 8, 9, 4, 5],
  [5, 8, 4, 2, 3, 9, 7, 6, 1],
  [9, 6, 7, 1, 4, 5, 3, 2, 8],
  [3, 7, 2, 4, 6, 1, 5, 8, 9],
  [6, 9, 1, 5, 8, 3, 2, 7, 4],
  [4, 5, 8, 7, 9, 2, 6, 1, 3],
  [8, 3, 6, 9, 2, 4, 1, 5, 7],
  [2, 1, 9, 8, 5, 7, 4, 3, 6],
  [7, 4, 5, 3, 1, 6, 8, 9, 2],
];
const hardSolution = [
  [1, 2, 6, 4, 3, 7, 9, 5, 8],
  [8, 9, 5, 6, 2, 1, 4, 7, 3],
  [3, 7, 4, 9, 8, 5, 1, 2, 6],
  [4, 5, 7, 1, 9, 3, 8, 6, 2],
  [9, 8, 3, 2, 4, 6, 5, 1, 7],
  [6, 1, 2, 5, 7, 8, 3, 9, 4],
  [2, 6, 9, 3, 1, 4, 7, 8, 5],
  [5, 4, 8, 7, 6, 9, 2, 3, 1],
  [7, 3, 1, 8, 5, 2, 6, 4, 9],
];

// setupboard according to the difficulty level/mode
function setupBoard(board) {
  board.forEach((row, i) => {
    row.forEach((col, j) => {
      const cellIdx = i * 9 + j + 1;
      const el = document.querySelector(`#cell-${cellIdx} input`);
      el.value = "";
      el.disabled = false;
      if (board[i][j] !== 0) {
        el.value = board[i][j];
        el.classList.add("fixedinput");
        el.disabled = true;
      }
    });
  });
}

// select easy,medium,hard
document.querySelector(".modes").addEventListener("click", function (event) {
  switch (event.target.innerText) {
    case "Easy":
      setupBoard(easyBoard);
      break;
    case "Medium":
      setupBoard(mediumBoard);
      break;
    case "Hard":
      setupBoard(hardBoard);
      break;
  }
});

// validating on each input of user
// for (let i = 1; i <= 81; i++) {
//   document
//     .querySelector(`cell-${i} input`)
//     .addEventListener("change", validateSudoku);
// }

// validating the each row
function validateRow(rowNumber) {
  const values = []; //array to contain cell elements

  // row1 first cell is cell-1
  // row2 first cell is cell-10
  const start = (rowNumber - 1) * 9 + 1;

  // row1 last cell is cell-9
  // row2 last cell is cell-18
  const end = rowNumber * 9;

  for (let i = start; i <= end; i++) {
    // selecting / getting each cell's value in each row-i
    const v = document.querySelector(`#cell-${i} input`).value;
    // pushing non empty cell elements in the values array
    if (v !== "") values.push(v);
  }

  values.sort(); //sorting non empty elemets of each row
  console.log(values);
}
// validating all the 9 rows
function validateRows() {
  for (let i = 1; i <= 9; i++) {
    validateRow(i); //further calling this function for each row no.
  }
}

// validating the entire sudoku by checking rows, columns and blocks.
function validateSudoku() {
  const isValid = validateRows() && validateColumns() && validateBlocks();
  // calling these 3 functions
}
// calling the sudoku validation button on the click of button validate
document.getElementById("validate").addEventListener("click", validateSudoku);

function highlight(evt, handler) {
  const numClicked = evt.target.value;
  if (numClicked)
    for (let i = 1; i <= 81; i++) {
      const element = document.querySelector(`#cell-${i} input`);
      if (element.value === numClicked) {
        if (handler === "addhigh") {
          element.classList.add("highlight");
        } else if (handler === "removehigh") {
          setTimeout(function () {
            element.classList.remove("highlight");
          }, 2000);
        }
      }
    }
}

// for each input element of the cell.......
document.querySelectorAll("input").forEach((el) => {
  el.addEventListener("keypress", (event) => {
    const ASCIICode = event.which ? event.which : event.keyCode;
    // validating only numbers allowed in each input
    if (ASCIICode > 31 && (ASCIICode < 49 || ASCIICode > 57))
      event.preventDefault();
  });
});
// for each cell.......
document.querySelectorAll(".cell").forEach((el) => {
  // adding highlights to the same no.s in board on doubleclick
  el.addEventListener("dblclick", (event) => {
    highlight(event, "addhigh");
  });

  // removing highlights 2sec later moving away from the mouse
  el.addEventListener("mouseout", (event) => {
    highlight(event, "removehigh");
  });
});
