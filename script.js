"use strict";
const billAmount = document.querySelector("#billAmount");
const peopleAmount = document.querySelector("#peopleAmount");
const buttons = document.querySelectorAll(".tipButton");
const resetButton = document.querySelector(".resetButton");
const tipAmount = document.querySelector(".tipAmountValue");
const total = document.querySelector(".total");

let billValue = "";
let poepleValue = "";
let buttonValue = "";
billAmount.addEventListener("input", function (event) {
  billValue = event.target.value;
});
peopleAmount.addEventListener("input", function (event) {
  poepleValue = event.target.value;
});

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    buttonValue = event.target.value;
    console.log("Clicked button value: " + buttonValue);
  });
});

resetButton.addEventListener("click", function () {
  let finalTipAmount = (billValue * buttonValue) / 100;
  tipAmount.textContent = "$" + finalTipAmount;
  let totalAmount = finalTipAmount * poepleValue;
  total.textContent = "$" + totalAmount;
});
