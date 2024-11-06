// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//     const splashScreen = document.getElementById("splash-screen");
//     const loadingScreen = document.getElementById("loading-screen");
  
//     // Show splash screen for 3 seconds, then switch to loading screen
//     setTimeout(() => {
//       splashScreen.classList.add("hidden");
//       loadingScreen.classList.remove("hidden");
//     }, 3000); // 3000 milliseconds = 3 seconds
//   });
  


// script.js
document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById("splash-screen");
    const loadingScreen = document.getElementById("loading-screen");
  
    // Show splash screen for 3 seconds, then switch to loading screen
    setTimeout(() => {
      splashScreen.classList.add("hidden");
      loadingScreen.classList.remove("hidden");
    }, 3000); // 3000 milliseconds = 3 seconds
  });
  