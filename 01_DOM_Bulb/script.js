const bulb = document.querySelector(".bulb");
const bulbSwitch = document.querySelector(".bulb-switch");

//when click on bulbSwitch
bulbSwitch.addEventListener("click", changeBulbState);

let isBulbOn = false;
function changeBulbState() {
  //change bulb state
  isBulbOn = !isBulbOn;

  //change background
  bulb.style.backgroundColor = isBulbOn ? "yellow" : "#c6c6c6";

  //change switch text
  bulbSwitch.innerText = isBulbOn ? "Turn off" : "Turn on";
}
