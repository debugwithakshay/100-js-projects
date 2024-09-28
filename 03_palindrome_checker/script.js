const checkPalindromeBtn = document.querySelector(".check-palindrome-btn");
const palindromeInput = document.querySelector("#input");
const resultText = document.querySelector(".result-text");

//when click on check Palindrome button
checkPalindromeBtn.addEventListener("click", checkPalindrome);

//check Palindrome function
function checkPalindrome() {
  let enteredText = palindromeInput.value;

  if (validInput(enteredText)) {
    resultText.innerText = "";
    isPalindrome(enteredText);
  } else {
    resultText.innerText = "Input can't be empty";
  }
}

//valid input function
function validInput(enteredText) {
  //if entered text is not empty
  if (enteredText !== "") {
    return true;
  }
  return false;
}

//isPalindrome function
function isPalindrome(enteredText) {
  //remove spaces & lowercase Text
  let textToCheck = enteredText.toLowerCase().split(" ").join("");

  //reverse Text
  let reverseText = textToCheck.split("").reverse().join("");

  let isPalindrome = textToCheck === reverseText;

  resultText.innerText = `${isPalindrome ? "Yes," : "No,"} '${enteredText}' is ${
    isPalindrome ? "a" : "Not a"
  } Palindrome!`;
}
