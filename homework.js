document.addEventListener("DOMContentLoaded", function() {
    const changeTextButton = document.getElementById("changeTextButton");
    const resetTextButton = document.getElementById("resetTextButton");
    const paragraphElement = document.getElementById("paragraphElement");
    
    changeTextButton.addEventListener("click", function() {
      paragraphElement.textContent = "Hello, World!";
    });
    
    resetTextButton.addEventListener("click", function() {
      paragraphElement.textContent = "welcome";
    });
  });
  