document.addEventListener("DOMContentLoaded", function() {
    const text = "UI / UX Designer";
    const element = document.getElementById("typing-effect");
    let i = 0;
  
    function typeText() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 100); // Adjust speed by changing the number here
      } else {
        setTimeout(resetText, 1000); // Wait before restarting
      }
    }
  
    function resetText() {
      element.innerHTML = ''; // Clear the text
      i = 0; // Reset index to start typing again
      typeText(); // Restart typing animation
    }
  
    typeText(); // Start typing animation initially
  });
  