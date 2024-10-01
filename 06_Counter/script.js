const counter = document.querySelector(".counter");
const increaseBtn = document.querySelector(".increase-btn");
const resetBtn = document.querySelector(".reset-btn");
const decreaseBtn = document.querySelector(".decrease-btn");

increaseBtn.addEventListener("click", increaseCounter);
resetBtn.addEventListener("click", resetCounter);
decreaseBtn.addEventListener("click", decreaseCounter);

//increae counter function
function increaseCounter() {
  counter.innerText = Number(counter.innerText) + 1;
}

//reset counter function
function resetCounter() {
  counter.innerText = Number(0);
}

// decrease counter function
function decreaseCounter() {
  if (counter.innerText > 0) {
    counter.innerText = Number(counter.innerText) - 1;
  }
}
