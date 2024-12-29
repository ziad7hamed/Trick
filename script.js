// Select elements
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const wrapper = document.querySelector(".wrapper");
const successMessage = document.querySelector(".success-message");

let clickCount = 0; // Counter to track "No" button clicks
let gameOver = false; // To track if the game is over

// Handle "No" button click
noBtn.addEventListener("click", () => {
  if (gameOver) return;

  clickCount++; // Increment click count

  // Shrink the "No" button with each click
  const newSize = Math.max(30, 100 - clickCount * 15); // Minimum size is 30px
  noBtn.style.width = `${newSize}px`;
  noBtn.style.height = `${newSize}px`;

  // Move the "No" button randomly
  const maxX = window.innerWidth - newSize;
  const maxY = window.innerHeight - newSize;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // After 5 clicks, show the "Yes" button
  if (clickCount >= 5) {
    setTimeout(() => {
      noBtn.style.display = "none"; // Hide "No" button
      yesBtn.style.display = "block"; // Show "Yes" button
      moveYesButton(); // Move the "Yes" button randomly
    }, 1000);
  }
});

// Handle "Yes" button click
yesBtn.addEventListener("click", () => {
  gameOver = true; // Mark the game as over
  yesBtn.style.display = "none"; // Hide "Yes" button
  successMessage.style.display = "block"; // Show success message
});

// Move the "Yes" button randomly every 2 seconds
function moveYesButton() {
  if (gameOver) return;

  const maxX = window.innerWidth - yesBtn.offsetWidth;
  const maxY = window.innerHeight - yesBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  yesBtn.style.left = `${randomX}px`;
  yesBtn.style.top = `${randomY}px`;

  setTimeout(moveYesButton, 2000); // Move again after 2 seconds
}
