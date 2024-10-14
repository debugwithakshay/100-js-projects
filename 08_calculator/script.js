//global Variables
const btnPrint = document.querySelectorAll(".btn-print");
const input = document.getElementById("input");
const clearBtn = document.querySelector(".btn-clear");
const btnDel = document.querySelector(".btn-del");
const equalBtn = document.querySelector(".equal-btn");

//display value on screen when btn pressed
btnPrint.forEach((btn) => {
  btn.addEventListener("click", displayOnScreen);
});

function displayOnScreen() {
  //   if (
  //     this.innerText == "+" ||
  //     this.innerText == "-" ||
  //     this.innerText == "*" ||
  //     this.innerText == "/"
  //   ) {
  //     input.value = this.innerText + input.value;
  //     console.log(input.value);
  //   } else {}
  input.value = input.value + this.innerText;
}

//clear screen when btn is pressed
clearBtn.addEventListener("click", clearScreen);

function clearScreen() {
  input.value = "";
}

//click to delete last input
btnDel.addEventListener("click", delInput);

function delInput() {
  input.value = input.value.slice(0, input.value.length - 1);
}

//calculate
equalBtn.addEventListener("click", calculate);

function calculate() {
  input.value = eval(input.value);
}
