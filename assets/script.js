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

// setting up the board
function setupBoard() {
  const board = [
    [1, 0, 0, 4, 8, 9, 0, 0, 6],
    [7, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 1, 2, 9, 5],
    [1, 0, 0, 4, 8, 9, 0, 0, 6],
    [1, 0, 0, 4, 8, 9, 0, 0, 6],
    [1, 0, 0, 4, 8, 9, 0, 0, 6],
    [1, 0, 0, 4, 8, 9, 0, 0, 6],
    [1, 0, 0, 4, 8, 9, 0, 0, 6],
    [1, 0, 0, 4, 8, 9, 0, 0, 6],
  ];
}

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

// validating only numbers allowed in each input
document.querySelectorAll("input").forEach((el) => {
  return el.addEventListener("keypress", (event) => {
    const ASCIICode = event.which ? event.which : event.keyCode;

    if (ASCIICode > 31 && (ASCIICode < 49 || ASCIICode > 57))
      event.preventDefault();
  });
});
