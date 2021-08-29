"use strict";

function validateRow(rowNumber) {
  const values = [];
  const start = (rowNumber - 1) * 9 + 1;
  const end = rowNumber * 9;

  for (let i = start; i <= end; i++) {
    const v = document.querySelector(`#cell-${i} input`).value;
    if (v !== "") values.push(v);
  }
  values.sort();
  console.log(values);
}

function validateRows() {
  for (let i = 1; i <= 9; i++) {
    validateRow(i);
  }
}

function validateSudoku() {
  const isValid = validateRows() && validateColumns() && validateBlocks();
}

document.getElementById("validate").addEventListener("click", validateSudoku);
