let char = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "{",
  "}",
  "[",
  "]",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const generateBtn = document.querySelector(".generate-Btn");

const input = document.querySelector("#input");

generateBtn.addEventListener("click", generateRandomPass);

//generate random password when click on button
function generateRandomPass() {
  let randomPass = "";

  for (let i = 1; i <= 12; i++) {
    let randomChar = char[Math.floor(Math.random() * 70)];
    randomPass += randomChar;
  }

  input.value = randomPass;
}

const copyBtn = document.querySelector(".copy-icon");

copyBtn.addEventListener("click", () => copyPassword(input.value));

//copy password
function copyPassword(textToCopy) {
  //for old browser
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  //for new browser
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      console.log("Text copied to clipboard successfully!");
    })
    .catch((error) => {
      console.error("Error copying text to clipboard:", error);
    });
}
