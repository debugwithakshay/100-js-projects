const passwordInput = document.querySelector("#passwordInput");
const visibilityIcon = document.querySelector("#visibility-icon");

visibilityIcon.addEventListener("click", changeVisibility);

let isPasswordVisible = false;
function changeVisibility() {
  isPasswordVisible = !isPasswordVisible;

  //toggling icon
  visibilityIcon.src = isPasswordVisible
    ? "./assets/visibility_on.svg"
    : "./assets/visibility_off.svg";

  //toggling input type
  passwordInput.type = isPasswordVisible ? "text" : "password";
}
