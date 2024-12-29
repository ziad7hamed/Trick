// Select elements
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const message = document.querySelector(".message");

let clickCount = 0; // Counter to track "No" button clicks

// Handle "No" button click
noBtn.addEventListener("click", () => {
  clickCount++; // Increment click count

  if (clickCount < 4) {
    // Move the "No" button randomly
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  } else {
    // After 4 clicks, move the button far away and show the Yes button
    noBtn.style.left = Math.random() * window.innerWidth + "px";
    noBtn.style.top = Math.random() * window.innerHeight + "px";

    setTimeout(() => {
      noBtn.style.display = "none"; // Hide "No" button
      yesBtn.style.display = "block"; // Show "Yes" button
      message.style.visibility = "visible"; // Show additional message
    }, 1000);
  }
});

// Handle "Yes" button click
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I knew you love me!😝 يا اهبل  ";
  message.style.visibility = "hidden"; // Hide the message after clicking Yes
});
