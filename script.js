"use strict";
const billAmount = document.querySelector("#billAmount");
const peopleAmount = document.querySelector("#peopleAmount");
const buttons = document.querySelectorAll(".tipButton");
const resetButton = document.querySelector(".resetButton");
const tipAmount = document.querySelector(".tipAmountValue");
const total = document.querySelector(".total");
const costum = document.querySelector(".customInput");

let billValue = "";
let poepleValue = "";
let buttonValue = "";
let costumValue = "";
billAmount.addEventListener("input", function (event) {
  billValue = event.target.value;
});
peopleAmount.addEventListener("input", function (event) {
  poepleValue = event.target.value;
});
costum.addEventListener("input", function (event) {
  costumValue = event.target.value;
});
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    buttonValue = event.target.value;
    button.style.backgroundColor = "hsl(172, 67%, 45%)";
  });
});

resetButton.addEventListener("click", function () {
  if (billValue === "" && poepleValue === "") {
    billAmount.style.border = "red solid 2px";
    peopleAmount.style.border = "red solid 2px";
  } else {
    if (costumValue === "") {
      let finalTipAmount = (billValue * buttonValue) / 100;
      tipAmount.textContent = "$" + finalTipAmount;
      let totalAmount = finalTipAmount * poepleValue;
      total.textContent = "$" + totalAmount;
      console.log("first");
    } else {
      let finalTipAmount = (billValue * costumValue) / 100;
      tipAmount.textContent = "$" + finalTipAmount;
      let totalAmount = finalTipAmount * poepleValue;
      total.textContent = "$" + totalAmount;
      console.log("second");
    }
  }
});
