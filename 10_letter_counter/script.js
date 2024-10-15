const letterInput = document.querySelector("#letter");
const wordInput = document.querySelector("#word");
const resultText = document.querySelector(".result-text");
const countBtn = document.querySelector(".count-Btn");

//when click on countBtn
countBtn.addEventListener("click", function () {
  if (isInputValid(letterInput.value, wordInput.value)) {
    resultText.classList.remove("invisible");
    resultText.innerText = "Letter or Word can't be Empty";
  } else {
    resultText.classList.add("invisible");
    let result = countLetter(letterInput.value, wordInput.value);
    resultText.classList.remove("invisible")
    resultText.innerText = `${letterInput.value} comes ${result} times`
  }
});

function isInputValid(letterInput, wordInput) {
  if (letterInput.length === 0 || wordInput.length === 0) {
    return true;
  }
  return false;
}

function countLetter(letterInput, wordInput) {
  let count = 0;
  let pos = 0;

  // Loop through the word to find the substring
  while ((pos = wordInput.indexOf(letterInput, pos)) !== -1) {
    count++;
    pos += letterInput.length; // Move the position ahead to avoid overlapping matches
  }

  return count;
}
