const background = document.querySelector("body");
const colorBoxes = document.querySelectorAll(".color-box");

//adding click event listner to each box
colorBoxes.forEach((colorBox) => {
  colorBox.addEventListener("click", changeBackground);
});

function changeBackground() {
  let boxColor = this.getAttribute("box-color");
  background.style.backgroundColor = boxColor;
}
