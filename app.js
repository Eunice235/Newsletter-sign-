document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submit");
    
    
    submitButton.addEventListener("mouseover", function() {
      submitButton.style.backgroundColor = "Tomato";});
    
    
    submitButton.addEventListener("mouseout", function() {
      submitButton.style.backgroundColor = "blue";
    });
   
    
    submitButton.addEventListener("click", function() {
      window.location.href = "success.html";
    });
    
  });

  document.addEventListener("DOMContentLoaded", function() {
    var dismissButton = document.getElementById("dismiss");
    
    dismissButton.addEventListener("mouseover", function() {
      dismissButton.style.backgroundColor = "Tomato";});
    
    
    dismissButton.addEventListener("mouseout", function() {
      dismissButton.style.backgroundColor = "blue";
    });
    
    dismissButton.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  });
 
