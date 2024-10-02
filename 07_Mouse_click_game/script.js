// Selecting necessary DOM elements
const clickArea = document.querySelector(".container"); // Clickable area to start the game
const count = document.querySelector(".click-count"); // Counter for the number of clicks
const mainHeading = document.querySelector(".container h1"); // Main heading in the container
const minTimer = document.querySelector(".min-timer"); // Minute display for the timer
const secTimer = document.querySelector(".sec-timer"); // Second display for the timer
const resetBtn = document.querySelector(".resetBtn"); // Reset button

// Variables to manage game state
let isCountStarted = false; 
let timer; 

// Add event listener to the clickable area to start the game and count clicks
clickArea.addEventListener("click", handleClick);

function handleClick() {
  mainHeading.innerText = "Click to Increase Count"; // Update heading after the game starts
  count.innerText++; // Increment click count

  // Start the timer on the first click
  if (!isCountStarted) {
    isCountStarted = true; // Update flag to indicate the game has started
    startTimer(); // Start the countdown timer
  }
}

// Function to start the countdown timer
function startTimer() {
  minTimer.innerText = "00"; // Initialize minute timer to 00
  secTimer.innerText = "59"; // Initialize second timer to 59

  // Start countdown every second (1000ms)
  timer = setInterval(() => {
    // Decrement seconds
    secTimer.innerText--;

    // Pad with 0 if seconds are less than 10
    secTimer.innerText =
      secTimer.innerText < 10 ? "0" + secTimer.innerText : secTimer.innerText;

    // When timer reaches zero, stop the game
    if (secTimer.innerText === "00") {
      clearInterval(timer); // Stop the timer
      clickArea.removeEventListener("click", handleClick); // Disable further clicks
      mainHeading.innerText = `Your Score is ${count.innerText}`; // Display final score
    }
  }, 1000);
}

// Add event listener to the reset button to reset the game
resetBtn.addEventListener("click", resetGame);

function resetGame() {
  // Reset the timer
  minTimer.innerText = "01";
  secTimer.innerText = "00";

  // Re-enable clicking on the click area
  clickArea.addEventListener("click", handleClick);

  // Reset the click count and main heading
  count.innerText = "0";
  mainHeading.innerText = "Click to Start Game";

  // Clear the timer if it was running
  clearInterval(timer);

  // Reset the game state flag
  isCountStarted = false;
}
