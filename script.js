const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const image = document.querySelector(".image"); // Changed to select the image

// Change text and image when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  document.querySelector(".question").innerHTML = "LOVE U TOO HONEY BUNCH";
  // Update the path to the new image (bae.jpg)
  image.src = "images/bae.jpg";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
