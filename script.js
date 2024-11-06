// script.js
document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.getElementById("splash-screen");
  const loadingScreen = document.getElementById("loading-screen");
  const confettiContainer = document.getElementById("confetti-container");

  // Show splash screen for 3 seconds, then switch to loading screen
  setTimeout(() => {
    splashScreen.classList.add("hidden");
    loadingScreen.classList.remove("hidden");
  }, 3000); // 3 seconds

  // Confetti colors
  const colors = ["#FF5C5C", "#FFD700", "#32CD32", "#1E90FF", "#FF69B4"];

  // Create confetti pieces
  function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
    confettiContainer.appendChild(confetti);

    // Remove confetti after falling
    confetti.addEventListener("animationend", () => {
      confettiContainer.removeChild(confetti);
    });
  }

  // Continuously add confetti pieces
  setInterval(createConfetti, 100);
});
