
let score = localStorage.getItem("quizScore") || 0;
let total = localStorage.getItem("totalQuestions") || 0;

let scoreElement = document.getElementById("score");
let messageElement = document.getElementById("message");
let restartButton = document.getElementById("restartBtn");


scoreElement.textContent = score + " / 10";


messageElement.textContent = "आपने परीक्षा सफलतापूर्वक पूरी की है!";


restartButton.onclick = function() {
    
    localStorage.removeItem("quizScore");
    localStorage.removeItem("totalQuestions");

  
    window.location.href = "Queations.html";
};
