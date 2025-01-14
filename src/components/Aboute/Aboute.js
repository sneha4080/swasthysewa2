window.onload = function () {
  const movingTextElements = document.querySelectorAll(".moving-text");
  const containerWidth = document.querySelector(".moving-text-container").offsetWidth;

  function animateText(index) {
    if (index >= movingTextElements.length) {
      // Restart from the first line
      index = 0;
    }

    const textElement = movingTextElements[index];
    const textWidth = textElement.offsetWidth;
    const totalDistance = containerWidth + textWidth; // Total distance to cover

    // Reset position to the right
    textElement.style.transition = "none";
    textElement.style.transform = `translateX(${containerWidth}px)`;

    // Calculate duration based on speed (e.g., 100px/sec)
    const duration = (totalDistance / 100) * 1000;

    // Start animation
    setTimeout(() => {
      textElement.style.transition = `transform ${duration}ms linear`;
      textElement.style.transform = `translateX(-${textWidth}px)`;
    }, 0);

    // Wait for the animation to finish, then start the next line
    setTimeout(() => {
      animateText(index + 1);
    }, duration);
  }

  // Start the animation with the first text element
  animateText(0);
};
